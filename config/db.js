const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URI);
  } catch (error) {
    console.log(error.message.red.italic.bold);
    process.exit(1);
  }
};
module.exports = connectDb;

// kitty.save().then(() => console.log("meow"));
