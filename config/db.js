const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// OLD WAY
// mongoose.connect(db)  // this gives us back a promise (.then, .catch); BUT we're gonna use new standard: async, await


// NEW Better way
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true
    }); // since it returns a promise, we want to "await" for that
    console.log('MongoDB Connected')
  } catch(err) {
    console.error(err.message);
    process.exit(1); // we want to exit the process if the connection fails
  }
};


module.exports = connectDB;