const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    id: {
      type: String,
    },
    registration_term: {
      type: String,
    },
    faculty: {},
    course_code: {},
    section: {},
    tut_id: {},
    crn: {},
    title: {},
    course_description: {},
  },
  {
    timestamps: true,

    collection: "CarletonPathwaysDB.courses",
  }
);

module.exports = mongoose.model("Course", courseSchema, "courses");
