import helloWebpack from "./hello-webpack";
// import HelloWebpackButton from "./components/hello-webpack-button/hello-webpack-button";
import Heading from "./components/heading/heading";
import SerenityPresentation from "./components/serenity-presentation/serenity-presentation";

// import _ from "lodash";
// import React from "react";

// const helloButton = new HelloWebpackButton();
const h1Heading = new Heading();
const serenityPresentation = new SerenityPresentation();

h1Heading.render("Serenity Page");
// helloButton.render();
helloWebpack();
serenityPresentation.render();

if (process.env.NODE_ENV === "production") {
  console.log("Production mode.");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development mode.");
}
