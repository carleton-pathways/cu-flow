const express = require("express");
const router = express.Router();
const { getCourse, getCourses } = require("../controllers/courseController");

//get specified course
router.get("/:id", getCourse);
router.get("/", getCourses);

module.exports = router;
