const mongoose = require('mongoose');
const user_schema = mongoose.Schema({
  user_email: {
    type: String,
    require: true,
  },
  user_password :{
    type: String,
    require: true,
    user:{type: Schema.ObjectId, ref:'user_model'}
  }
});

module.exports = mongoose.model('resultColection', user_schema);
