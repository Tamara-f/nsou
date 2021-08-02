const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config();

module.exports = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    };
    await mongoose.connect(
      'mongodb+srv://admin:admin@goit.mfdap.mongodb.net/nsou?retryWrites=true',
      options
    );
    console.log('Connected to database.');
  } catch (error) {
    console.log('Could not connect to database.', error);
  }
};
