const express = require("express");
const courseRoutes = require("./routes/courses");
const mongoose = require("mongoose");

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

mongoose
  .connect(process.env.URI)
  .then(() => {
    const dbName = mongoose.connection.db.databaseName;
    console.log("Connected to database:", dbName);

    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to database and server started on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });

process.env;
