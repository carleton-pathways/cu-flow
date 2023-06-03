const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const { showCourse, indexCourse,createCourse,deleteCourse,updateCourse } = require("../controllers/courseController");

//get specified course
router.get("/:id", showCourse);
router.get("/", indexCourse);
=======
const { getCourse, getAllCourses,createCourse,deleteCourse,updateCourse } = require("../controllers/courseController");

//get specified course
router.get("/:id", getCourse);
router.get("/", getAllCourses);
>>>>>>> 7b546e4fa9a9a392bb17e31823b0d3f9348abbe8
router.post("",createCourse)
router.delete("/:id", deleteCourse)
router.patch("/:id", updateCourse)
module.exports = router;
