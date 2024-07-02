const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

//middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connectes successfully");
  })
  .catch((err) => {
    console.log("Connection failed");
  });

// const server = () => {
//   app.listen(3000, () => {
//     console.log("listening to port:", 3000);
//   });
// };

// server()

app.listen(8080 , () => {
    console.log("connection on PORT" , 8080);
})