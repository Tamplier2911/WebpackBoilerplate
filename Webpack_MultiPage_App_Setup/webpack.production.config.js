// importing path
const path = require("path");

// import plugins
// const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
    // md5 hashing bundle
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    // public path (images for example)
    // publicPath: "dist/"
    publicPath: "/static/"
  },

  // development mode development / production
  mode: "production",

  // split imported libraries _lodash etcetera
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 10000,
      automaticNameDelimiter: "_"
    }
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
        use: [MiniCssExtractPlugin.loader, "css-loader"]
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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
    // new TerserPlugin(),
    new MiniCssExtractPlugin({
      // md5 hashing styles
      filename: "[name].[contenthash].css"
    }),
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
      chunks: ["home-page", "vendors~home-page~serenity-page"],
      title: "Home Page",
      template: "src/page-template.hbs",
      description: "Description of app."
      // meta: {
      //   description: "Description of app."
      // }
    }),
    new HtmlWebPackPlugin({
      filename: "serenity-page.html",
      chunks: ["serenity-page", "vendors~home-page~serenity-page"],
      title: "Serenity Page",
      template: "src/page-template.hbs",
      description: "Description of app."
    })
  ]
};
