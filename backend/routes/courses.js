const express = require("express");
const router = express.Router();
const { showCourse, indexCourse,createCourse,deleteCourse,updateCourse } = require("../controllers/courseController");

//get specified course
router.get("/:id", showCourse);
router.get("/", indexCourse);
router.post("",createCourse)
router.delete("/:id", deleteCourse)
router.patch("/:id", updateCourse)
module.exports = router;
