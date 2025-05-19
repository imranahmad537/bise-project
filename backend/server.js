const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Replace this with your own MongoDB connection string
mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

  // app.use(express.static('public'));

  // app.use(express.static('public'));
  app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/rollnoslip.html');
 
});

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use(express.static(__dirname + '/public'));


// Mongoose schema & model
const FormSchema = new mongoose.Schema({
  roll: String,
  name: String,
  fname: String
});

const FormModel = mongoose.model("Form", FormSchema);

// Route to receive form data
app.post("/submit", async (req, res) => {
  const formData = new FormModel(req.body);
  await formData.save();
  res.send("Data saved to MongoDB!");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));







// ahmadimrankh99
// ONUFZ77xNnowfdyr


// mongodb+srv://ahmadimrankh99:ONUFZ77xNnowfdyr@cluster0.rneydpv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//  base: process.env.VITE_APP_PATH || '/Imran-developer-portfolio'