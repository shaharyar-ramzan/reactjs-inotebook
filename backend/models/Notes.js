const mongoose = require('mongoose');

const notesSchema = new Schema({
    title: {
        title:  String,
        required: true
    },
    description: {
        title:  String,
        required: true
    },
    tag: {
        title:  String,
        default: 'General'
    },
    created_date: { 
        type: Date, 
        default: Date.now 
    },
    enable: Boolean,
  });

  modules.exports = mongoose.model('notes', notesSchema);
