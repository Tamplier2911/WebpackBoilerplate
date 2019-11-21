const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");

app.get("/", function(req, res, next) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/index.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

// all requests that starts from /static will go directly to dist
app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.listen(8000, function() {
  console.log("Server up and running at http://localhost:8000/");
});
