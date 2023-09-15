const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://anshuman2003:Anshuman2003@diet.eceufso.mongodb.net/Diet"; // Replace 'my-database' with your actual database name

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully i am inside mongodb");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = connectToMongo;




