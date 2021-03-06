import helloWebpack from "./hello-webpack";
// import addImage from "./add-image";
import HelloWebpackButton from "./components/hello-webpack-button/hello-webpack-button";
import Heading from "./components/heading/heading";

// import _ from "lodash";
// import React from "react";

const helloButton = new HelloWebpackButton();
const h1Heading = new Heading();

h1Heading.render("Home Page");
helloButton.render();
helloWebpack();
// addImage();

if (process.env.NODE_ENV === "production") {
  console.log("Production mode.");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development mode.");
}
