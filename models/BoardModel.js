const mongoose = require('mongoose');



const BoardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  threads: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Thread'
  }]
})




module.exports = mongoose.model('Board', BoardSchema);


