const express = require("express");
const router = express.Router();
const { getCourse, getAllCourses,createCourse,deleteCourse,updateCourse } = require("../controllers/courseController");

//get specified course
router.get("/:id", getCourse);
router.get("/", getAllCourses);
router.post("",createCourse)
router.delete("/:id", deleteCourse)
router.patch("/:id", updateCourse)
module.exports = router;
