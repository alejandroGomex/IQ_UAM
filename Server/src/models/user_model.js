const mongoose = require('mongoose');
const user_schema = mongoose.Schema({
  user_email: {
    type: String,
    require: true,
    ref : 'imageModel'
  },
  user_password :{
    type: String,
    require: true,
  }
});

module.exports = mongoose.model('resultColection', user_schema);
