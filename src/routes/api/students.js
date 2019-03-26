// bring in Express to use features
const express = require("express");

// define Express Router
const router = express.Router();

// bring in the item model to make quries to the mongoDB
const Student = require("../../models/Student");

/////// CREATE ROUTES ////////
// @route       GET /api/students
// @desc        Gets all students in db collection
// @access    Public
router.get("/", (req, res) => {
	//fetch all items from DB
	//take model called 'Item'
	// query methods: https://mongoosejs.com/docs/queries.html
	Student.find() // returns a Promise
		.then(students => {
			res.json(students);
			console.log(res.data);
		}); // JSON api that we make readable
});

module.exports = router;
