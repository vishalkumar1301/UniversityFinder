const OktaJwtVerifier = require('@okta/jwt-verifier');


const authenticationRequired = async (req, res, next) => {
    console.log('Authentication required')
    const oktaJwtVerifier = new OktaJwtVerifier({
      issuer: 'https://dev-46374898.okta.com/oauth2/default'
    });
    const audience = 'api://default';
    
    const authHeader = req.headers.authorization || '';
    const match = authHeader.match(/Bearer (.+)/);
    if (!match) {
      return res.redirect('/login');
    }
  
    try {
      const accessToken = match[1];
      if (!accessToken) {
        return res.redirect('/login');
      }
      req.jwt = await oktaJwtVerifier.verifyAccessToken(accessToken, audience);
      next();
    } catch (err) {
      return res.status(401).send(err.message);
    }
  };

const profileAuthorizationRequired = async (req, res, next) => {
    console.log('profile authorization required')
    const oktaJwtVerifier = new OktaJwtVerifier({
      issuer: 'https://dev-46374898.okta.com/oauth2/default'
    });
    const audience = 'http://localhost:3000/profile1';
    
    if (!req.isAuthenticated()) {
      return res.redirect('/login');
    }

    try {
      if (!req.user.displayName) {
        return res.redirect('/profile');
      }
      next();
    } catch (err) {
      return res.status(401).send(err.message);
    }
}

module.exports = {authenticationRequired, profileAuthorizationRequired};