var passport = require('passport');
var Strategy = require('passport-openidconnect').Strategy;
var session = require('express-session');
var express = require('express');

const passportSetup = (app) => {

    app.use(session({
        secret: 'CanYouLookTheOtherWay',
        resave: false,
        saveUninitialized: true
    }));
    
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use('oidc', new Strategy({
        issuer: 'https://dev-46374898.okta.com/oauth2/default',
        authorizationURL: 'https://dev-46374898.okta.com/oauth2/default/v1/authorize',
        tokenURL: 'https://dev-46374898.okta.com/oauth2/default/v1/token',
        userInfoURL: 'https://dev-46374898.okta.com/oauth2/default/v1/userinfo',
        clientID: '0oa5a0y3gp3sCCE9X5d7',
        clientSecret: '-2oinqT7nPXNIiSj1iXcjzheGIdT-ygQDAY-Xe2t',
        callbackURL: 'http://localhost:3000/authorization-code/callback',
        scope: 'openid profile email',
        responseType: 'code'
    }, (issuer, profile, done) => {
        return done(null, profile);
    }));
    
    passport.serializeUser((user, next) => {
        next(null, user);
    });
      
    passport.deserializeUser((obj, next) => {
        next(null, obj);
    });

    return passport;
}

module.exports = passportSetup;