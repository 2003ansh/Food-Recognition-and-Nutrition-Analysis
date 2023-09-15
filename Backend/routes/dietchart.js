const express = require('express')
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const  Dietchart = require('../models/Chart');

//Route 1: fetch  a note using: get "/api/chart/fetchallchart". login not required
router.get('/fetchallchart', async (req, res) => {
    try {
        const charts = await Dietchart.find();
        res.json(charts);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }

});
//Route 2: add a new note using: post "/api/chart/addchart". login not required

router.post('/addchart', [
    body('Calories', 'Enter a valid calories').isLength({ min: 1 }),
], async (req, res) => {
    try {
        let { Calories } = req.body;
        
        // Clean and trim the input
        Calories = Calories.trim();

        let rand = Math.floor(Math.random() * 3) + 1;
        
        // Convert the Calories value to lowercase to ensure case-insensitive comparison
        const lowerCaseCalories = Calories.toLowerCase();
        
        if (lowerCaseCalories === "low_calorie") {
            Calories = "Low Calorie1";
        }
        if (lowerCaseCalories === "moderate_calorie") {
            Calories = `Moderate Calorie${rand}`;
        }
        if (lowerCaseCalories === "high_calorie") {
            Calories = `High Calorie${rand}`;
        }
        if (lowerCaseCalories === "ultra_high_calorie") {
            Calories = `Ultra High Calorie${rand}`;
        }

        //if there are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        // Query the database with the modified Calories value
        const charts = await Dietchart.find({ "Calories": Calories });
        res.json(charts);
    } catch (error) {
        // Handle errors here
        console.error(error.message);
        res.status(500).send("Internal server error occurred");
    }
});


module.exports = router;