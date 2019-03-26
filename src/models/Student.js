const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE a SCHEMA
// To add additional keys later:
// https://mongoosejs.com/docs/api.html#schema_Schema-add
const studentSchema = new Schema({
	name: String,
	highestScore: Number
});

// CREATE a MODEL that uses the schema
const Student = mongoose.model("Student", studentSchema);

// Create instances of models (called documents) that have
// built in methods: https://mongoosejs.com/docs/api.html#document-js
module.exports = Student;
