const { Console } = require("console");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist"));

app.listen(process.env.PORT || 8980);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

Console.log("apps is running");
