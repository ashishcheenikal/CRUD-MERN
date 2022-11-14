const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/users");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

// setting up CORS
const options = {
  origin: "http://localhost:3000",
  SuccessStatus: 200,
}; 
app.use(cors(options));

//JSON response 
app.use(express.json());

//Dynamically accessing routes
readdirSync("./routes").map((routes) => {
  app.use("/", require("./routes/" + routes));
});

//Mongoose settings
mongoose 
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,  
  })
  .then((data) => console.log("Database connection established"))
  .catch((err) => console.log("Error in Database connection established : " ,err));
 
//PORT settings
let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("listening on port " + port);
});

