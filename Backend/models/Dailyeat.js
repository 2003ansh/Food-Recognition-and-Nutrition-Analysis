const mongoose = require('mongoose');
const { Schema } = mongoose;
const Dailyeat = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
   Foodname: {
        type: String,
        required: true
    },
    
    Photo: {
        type: String,
        default: "General"
    },
    Calorie:{
        type: Number,
        required: true
    },
    Date: {
        type:  Date,
        default: Date.now
    }
  });

module.exports = mongoose.model('DailyEat', Dailyeat);