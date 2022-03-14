//db file

const mongoose = require("mongoose");
//connecting mongoose with database
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://dnyaneshpatil:EnCqkzZIYtZw2NQW@cluster0.y3vwc.mongodb.net/polling-database?retryWrites=true&w=majority");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error Connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to DB");
});
module.exports = db;
