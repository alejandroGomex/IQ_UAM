const mongoose = require('mongoose');
const result_schema = mongoose.Schema({
  score: {
    type: Number,
    require: true,
    ref : 'imageModel'
  },
  id :{
    type: String,
    require: true,
    ref:'user_model'
  }
});

module.exports = mongoose.model('resultColection', result_schema);
