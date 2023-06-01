const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    registration_term: {},
    faculty: {},
    course_code: {},
    section: {},
    tut_id: {},
    crn: {},
    title: {},
    course_description: {},
    precludes_string: {},
    precludes_courses: {},
    course_credit_value: {},
    schedule_type: {},
    status: {},
    section_information: {},
    year_in_program: {},
    level_restriction: {},
    degree_restriction: {},
    major_restrictions: {},
    program_restriction: {},
    department_restriction: {},
    faculty_restrictions: {},
    start_date: {},
    end_time: {},
    building: {},
    room: {},
    schedule: {},
    instructor: {},
    instructor_status: {},
  },
  {
    timestamps: true,

    collection: "CarletonPathwaysDB.courses",
  }
);

module.exports = mongoose.model("Course", courseSchema, "courses");
