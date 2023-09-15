const mongoose = require('mongoose');
const { Schema } = mongoose;
const DietChart = new Schema({
    
   Calories_per_Day:{
    type: String,
    required: true
   },
   Breakfast:{
    type: String,
    required: true
   },
    Lunch:{
    type: String,
    required: true
    },
    Snacks:{
    type: String,
    required: true
    },
    Dinner:{
    type: String,
    required: true
    }


  });

module.exports = mongoose.model('Chartinfo', DietChart);