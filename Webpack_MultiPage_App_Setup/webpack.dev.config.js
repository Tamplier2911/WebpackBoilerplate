// importing path
const path = require("path");

// import plugins
// const TerserPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry point
  // entry: "./src/index.js",
  entry: {
    "home-page": "./src/home-page.js",
    "serenity-page": "./src/serenity-page.js"
  },

  // output point
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // public path (images for example)
    // publicPath: "dist/"
    publicPath: ""
  },

  // development mode development / production
  mode: "development",

  // development server
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    index: "index.html",
    port: 9000
  },

  // module
  module: {
    // rules
    rules: [
      {
        test: /\.(png|jpg)/,
        use: ["file-loader"]
      },
      /*
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      */
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
        // use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      /*
      {
        test: /\.scss$/,
        // <=== process loaders from right to left
        // npm i node-sass
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      */
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
        // use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["transform-class-properties"]
          }
        }
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"]
      }
    ]
  },

  // plugins
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        // default path resolve - dist
        "**/*",
        // absolute path to additation cleaning
        path.join(process.cwd(), "build/**/*")
      ]
    }),
    new HtmlWebPackPlugin({
      filename: "home-page.html",
      chunks: ["home-page"],
      title: "Home Page",
      template: "src/page-template.hbs",
      description: "Description of app."
    }),
    new HtmlWebPackPlugin({
      filename: "serenity-page.html",
      chunks: ["serenity-page"],
      title: "Home Page",
      template: "src/page-template.hbs",
      description: "Description of app."
    })
  ]
};
