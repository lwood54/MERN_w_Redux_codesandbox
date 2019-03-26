// makes using/creating node server easier
const express = require("express");

// mongoose helps make using mongoDB easier
const mongoose = require("mongoose");

// body-parser takes request and get data from the body
const bodyParser = require("body-parser");

// notfiy server to look for routes (these could be put in server.js, but separating this cleans codebase)
const students = require("./routes/api/students");

// intialize express app
const app = express();

// applying bodyParser middleware
app.use(bodyParser.json());

// define mongoDB using mLab
const db = "mongodb://lwood:publicpassword123@ds163255.mlab.com:63255/public-code";
// connect a mongoDB database (I am using mLab cloud mongDB)
mongoose.connect(
	db,
	{ useNewUrlParser: true }
)
	.then(() => {
		console.log("Successfully connected to mLab mongoDB!");
		// SAMPLE one time loading student instance
		// let studentSchema = new mongoose.Schema({
		// 	name: String
		// });
		// let Student = mongoose.model("Student", studentSchema);
		// var Logan = new Student({ name: "Logan" });
		// Logan.save(function(err, Logan) {
		// 	if (err) return console.error(err);
		// });
	})
	.catch(err => {
		console.log("Error: ", err);
	});

// Use routes
// anything that comes in and uses /api/students, will refer to the students variable (which connects to the
// routes/api/students.js file)
app.use("/api/students", students);

// set port that is flexible and may need to be changed by cloud service
const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server started on ${port}!`);
});
