const mongoose = require('mongoose');
const result_schema = mongoose.Schema({
  score: {
    type: Number,
    require: true,
  },
  id :{
    type: String,
    require: true,
/*     user:{type: Schema.ObjectId, ref:'user_model'}
 */  
}
});

module.exports = mongoose.model('resultColection', result_schema);
