const express = require("express");

const fs = require("fs");
const path = require("path");

const app = express();

app.get("/home-page/", (req, res, next) => {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/home-page.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.get("/serenity-page/", (req, res, next) => {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/serenity-page.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.listen(8000, () => {
  console.log("Server is up and running at http://localhost:8000/");
});
