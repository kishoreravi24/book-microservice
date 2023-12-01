const mongoose = require('mongoose')
const {schema} = mongoose

const bookSchema = new schema({
  uuid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  authorname: {
    type: String,
    required: true
  },
  releaseData: {
    type: Date,
    required: true
  }
});

modules.exports = mongoose.model('book', bookSchema);

