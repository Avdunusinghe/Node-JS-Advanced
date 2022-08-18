//load modules
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mongoose = require("mongoose");
//Create the Express App
const app = express();

//Setup Request body JSON Parsing
app.use(express.json());

const fileStorage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, "images");
  },
  filename: (request, file, cb) => {
    cb(null, 56 + "-" + file.originalname);
  },
});

const fileFilter1 = (request, file, cb) => {
  if (
    file.mimeType === "image/png" ||
    file.mimeType === "image/jpg" ||
    file.mimeType === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(express.urlencoded({ extended: true }));
app.use(multer({ storage: fileStorage }).single("image"));

//Enable All CORS Requests
app.use(cors());

const connectionString = process.env.connectionString;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {});

//Connect Database
app.use("/api/prodcut/", require("./src/routes/product.routes"));
//routes
app.get("/", (request, response) => {
  response.send("<h3>API</h3>");
});

const port = process.env.PORT || 5600;

app.listen(port, () => {
  console.log(` Web API Prod: ${port}`);
});
