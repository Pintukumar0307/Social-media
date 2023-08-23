// const mongoose = require("mongoose");

// exports.connectDatabase = () => {
//   mongoose
//     .connect(process.env.MONGO_URI)
//     .then((con) => console.log(`Database Connected: ${con.connection.host}`))
//     .catch((err) => console.log(err));
    

// };

const mongoose = require("mongoose");


exports.connectDatabase= async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,
      {
        dbName: "socialmedia",
      }
      );
    console.log(
      `Connected to Mongodb Database: ${mongoose.connection.host} `
    );
  } catch (error) {
    console.log(`MONGO Connect Error: ${error}`);
  }
};

// module.exports = connectDB;


