var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vishalkumar1301:Vishal%40123@cluster0.oembp.mongodb.net/?retryWrites=true&w=majority');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to Database successfully");
});