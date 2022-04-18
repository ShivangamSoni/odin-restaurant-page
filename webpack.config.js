const path = require("path");

// HTML Plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

// CSS Plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Web App",
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      // Babel on JS
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // For Module CSS, SCSS & SASS Files
      {
        test: /\.module\.(scss|sass|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:10]",
              },
              importLoaders: 1,
            },
          },
          "sass-loader",
        ],
        include: path.resolve(__dirname, "src"),
      },
      // For Plain CSS, SCSS & SASS Files
      {
        test: /\.(scss|sass|css)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "src"),
        exclude: /\.module\.(css|scss|sass)$/i,
      },
    ],
  },
};

module.exports = config;
