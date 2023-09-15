const express = require('express')
const router = express.Router();

var fetchuser = require('../middleware/fetchuser');


// const User = require('../models/User') means we are importing the User model from User.js file in models folder  where we have define the schema of our user database. we are importing the User model because we need to create a user and save it in the database. we need to create a user because we need to register a user.
const User = require('../models/User')


//for hashing the password we have used bcryptjs package. we have installed it using npm i bcryptjs. we have imported it. we have created a salt using const salt = await bcrypt.genSalt(10);. we have hashed the password using const secPass = await bcrypt.hash(req.body.password, salt);. we have stored the hashed password in the database. we have stored the hashed password in the database because we need to store the password in the database. we need to store the password in the database because we need to check whether the password entered by the user is correct or not. we need to check whether the password entered by the user is correct or not because we need to authenticate the user. we need to authenticate the user because we need to check whether the user is logged in or not. we need to check whether the user is logged in or not because we need to show the user's data only if the user is logged in.
const bcrypt = require('bcryptjs');

//for creating a token.we have used jsonwebtoken package. we have installed it using npm i jsonwebtoken. we have imported it.the webtoken has 3 parts header,data,secretkey. we have created a secret key and stored it in a variable JWT_SECRET. we have created a token using jwt.sign({ user: user.id }, JWT_SECRET);. we have passed the user id in the token. we have sent the token to the user using res.json({authtoken});. we have sent the token to the user because we need to store the token in the local storage of the user's browser. we need to store the token in the local storage of the user's browser because we need to use the token for authentication. we need to use the token for authentication because we need to check whether the user is logged in or not. we need to check whether the user is logged in or not because we need to show the user's data only if the user is logged in. 
const  jwt = require('jsonwebtoken');

//ti is my secreat key for creating a token
const JWT_SECRET = 'shhh'; 


// const User = require('../models/User') means we are importing the User model from User.js file in models folder  where we have define the schema of our user database. we are importing the User model because we need to create a user and save it in the database. we need to create a user because we need to register a user. 
const { body, validationResult } = require('express-validator');

//---------------------------------------------------------------------------------------------------------------------------------------------
//Route 1: create a user using: POST "/api/auth/createuser". Doesn't require auth.no login required.it is a post request since we are sending data to the server 
// res means response and req means request.
//if we need to show the data on the browser we use res.send and if we need to show the data on the terminal we use console.log
// router.post('/createuser', (req, res) => {} means we are creating a route for the post request

router.post('/createuser', [

   // below three lines are used for validating wethere the email name and password are of correct format or not.for that we have used express validator.
   body('name', 'Enter a valid name').isLength({ min: 3 }),
   body('email', 'Enter a valid email').isEmail(),
   body('password', 'password must be atlest 5characters').isLength({ min: 5 }),
], async (req, res) => {


   //if there are errors, return bad request and the errors caused due to format.
   const errors = await validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }

      
   //check whether the user with this email exists already
   try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
         return res.status(400).json({ error: " user with this email already exists" });
      }


      //create a new user.if the user doesn't exist then we will create a new user.
      
      //hashing the password
      const salt = await bcrypt.genSalt(10);  //--->here 10 is the number of rounds. the more the number of rounds the more secure the password will be.


      const secPass = await bcrypt.hash(req.body.password, salt); //-->here we are hashing the password using bcrypt.hash method. we are passing the password and salt as arguments. we are storing the hashed password in a variable secPass.


      // Create a new user with the model User
      user = await User.create({
         name: req.body.name,
         password: secPass,
         email: req.body.email,
         photo:req.body.photo

      }) 

      const data = {
         user: {
             id: user.id
         }
   }

   //here we are creating a token. using jwt.sign method which is a synchronous process.
   const authtoken= jwt.sign(data, JWT_SECRET);
   console.log(authtoken);

      //we are sending the token to the user using res.json({authtoken});
      success=true;
      res.json({success,authtoken});


   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error occured");
   }
})

//----------------------------------------------------------------------------------------------------------------------------------------------
// Route 2:authenticate a user using: POST "/api/auth/login". No login required.

router.post('/login', [
   body('email', 'Enter a valid email').isEmail(),
   body('password', 'password cannot be blank').exists(),
], async (req, res) => {
   //if there are errors, return bad request and the errors
   let success = false;
   const errors = await validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }

   const { email, password } = req.body;//---->destructuring the email and password from the req.body.

   try {
      let user = await User.findOne({ email }); //--->here we are finding the user with the email entered by the user. if the user exists then we will store the user in the variable user. if the user doesn't exist then we will store null in the variable user.


      if (!user) {
        success = false;
         return res.status(400).json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password); //-->here we are comparing the password entered by the user with the password stored in the database. if the password matches then we will store true in the variable passwordCompare. if the password doesn't match then we will store false in the variable passwordCompare.
      if (!passwordCompare) {
         return res.status(400).json({ error: "Please try to login with correct credentials" });
      }

      const data = {
            user: {
                id: user.id
            }
      }
      const authtoken= jwt.sign(data, JWT_SECRET); //-->here we are creating a token using jwt.sign method. we are passing the index of user  and JWT_SECRET as arguments. we are storing the token in a variable authtoken.ex:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY5ZjQ0ZjQ5ZjYyZjIwMDAxNzQ0ZjQ1In0sImlhdCI6MTYw".this is the token we get after creating the token.
      success = true;
      res.json({success,authtoken});  


   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server erorr occured error occured");
   }



})

//Route 3: get loggedin user details using: POST "/api/auth/getuser". login required.
router.post('/getuser', fetchuser,  async (req, res) => {

   try {
     userId = req.user.id; //-->here we are assiging the id of the user to the variable userId.
     const user = await User.findById(userId).select("-password")
     res.send(user)
   } catch (error) {
     console.error(error.message);
     res.status(500).send("Internal Server Error");
   }
 })

module.exports = router;