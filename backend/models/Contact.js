const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    contactFirstName: {
      type: String,
      required: true,
    },
     contactLastName: {
      type: String,
      required: true,
  },
  contactInfo: {
      type: String,
      required: false,
  },
    notes: {
      type: String,
      required: true,
  },
  
    completed: {
      type: Boolean,
      required: true,
    },
    userId: {
      type: String,
      required: true
    }
  })
  
  module.exports = mongoose.model('Contact', ContactSchema)
  
  
  
  