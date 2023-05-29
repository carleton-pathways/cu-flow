const express = require("express");
const dbo = require("./db/conn");
const courseRoutes = require("./routes/courses");

require("dotenv").config();
const app = express();
const path = require("path");

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ mssg: "App" });
});
app.use("/search", courseRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server started on port", process.env.PORT);
});

process.env;
