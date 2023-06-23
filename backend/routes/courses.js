const express = require("express");
const router = express.Router();
const { showCourse, indexCourse,createCourse,deleteCourse,updateCourse, courseByName } = require("../controllers/courseController");

//get specified course
router.get("/course/:id", courseByName)
router.get("/:id", showCourse);
router.get("/", indexCourse);
router.post("",createCourse)
router.delete("/:id", deleteCourse)
router.patch("/:id", updateCourse)
module.exports = router;
