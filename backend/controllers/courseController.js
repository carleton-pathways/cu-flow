const Course = require("../model/courseModel");
const mongoose = require("mongoose");

const getCourse = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Course" });
  }
  const course = await Course.findById(id);

  if (!course) {
    return res.status(404).json({ error: "No such Course" });
  }
  res.status(200).json({
    course: course.faculty + course.course_code,
  });
};

const getCourses = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const courses = await Course.find({}).sort({ createdAt: -1 });
  res.status(200).json(courses);
};

module.exports = { getCourse, getCourses };
