
const express = require("express");
const mongoose = require("mongoose");
// const Router = require("./routes");

const app = express();
app.use(express.json());
const username = "<code1511>";
const password = "<Anchal>";
const cluster = "<MinhazDb>";
const dbname = "myFirstDatabase";
mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));