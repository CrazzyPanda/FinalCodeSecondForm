const mongoose = require('mongoose');

const mongo_uri = 'mongodb+srv://GraceCautley:Felix136@cluster0-ou9mk.mongodb.net/form_db?retryWrites=true&w=majority';
mongoose.connect(mongo_uri, {useNewUrlParser: true}, function(err){
  if(err){
    throw err;
  }
  else {
      console.log(`Successfully connected to ${mongo_uri}`);
    }
});
