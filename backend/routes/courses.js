const express = require("express");
const router = express.Router();

//get specified course
router.get("/:id", (req, res) => {
  console.log(req.path.substring(1));
  res.json({
    mssg: req.path.substring(1),
  });
});

module.exports = router;
