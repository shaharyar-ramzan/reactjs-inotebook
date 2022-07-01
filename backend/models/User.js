const mongoose = require('mongoose');

const userSchema = new Schema({
    name: {
        title:  String,
        required: true
    },
    gender: Boolean,
    email: {
        title:  String,
        required: true,
        unique: true
    },
    password: {
        title:  String,
        required: true
    },
    body:   String,
    comments: [{ body: String, date: Date }],
    created_date: { 
        type: Date, 
        default: Date.now 
    },
    active: Boolean,
    enable: Boolean,
    
  });

  modules.exports = mongoose.model('user', userSchema);
