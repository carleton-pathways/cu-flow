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
    faculty: {type: String},
    course_code: {type: Number},
    section: {type: String},
    tut_id: {type: Number},
    crn: {type: Number},
    title: {type: String},
    course_description: {type: String},
    precludes_string:{ type: String},
    prereq_courses: {type: String},
    course_credit_value: {type: Number},
    schedule_type:{type: String},
    status: {type: String},
    section_information: {type: String},
    year_in_program:{type: String},
    level_restriction:{type: String},
    degree_restriction:{type: String},
    major_restriction:{type: String},
    program_restriction:{type: String},
    department_restriction:{type: String},
    faculty_restriction:{type: String},
    start_date:{type: String},
    end_date:{type: String},
    building:{type: String},
    room:{type: Number},
    schedule: {type: String},
    instructor: {type: String},
    instructor_status:{type: String}
  },
  {
    timestamps: true,

    collection: "CarletonPathwaysDB.courses",
  }
);

module.exports = mongoose.model("Course", courseSchema, "courses");
