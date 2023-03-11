const mongoose = require("mongoose");

async function connectDb() {
  try {
    const db = await mongoose.connect(process.env.DB_URI);
    console.log(
      `MongoDB is connecting, dbName : ${db.connection.name}, on port: ${db.connection.port}, on host: ${db.connection.host}`
        .blue.blue.bold
    );
  } catch (error) {
    console.log(error.message.red.italic.bold);
    process.exit(1);
  }
}

module.exports = connectDb;

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));
