const path = require("path");

module.exports = {
  entry: "./src/testPage.tsx", // Entry file for your TypeScript library
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "tharikida-ui.bundle.js", // Output bundle file
    library: "TharikidaUI", // Global variable for the library
    libraryTarget: "umd", // Universal module definition for compatibility
    globalObject: "this", // To work in the browser environment
  },
  externals: {
    react: "React", // Do not bundle React
    "react-dom": "ReactDOM", // Do not bundle ReactDOM
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match both .ts and .tsx files
        exclude: /node_modules/,
        use: {
          loader: "ts-loader", // Use ts-loader to transpile TypeScript files
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ["style-loader", "css-loader"], // Process CSS files
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // Resolve .ts, .tsx, .js, and .jsx
  },
  mode: process.env.NODE_ENV === "development" ? "development" : "production", // Automatically set mode
  devServer: {
    static: path.resolve(__dirname, "dist"), // Serve from 'public' directory
    port: 3000, // Port for the dev server
    open: true, // Open the browser automatically
    hot: true, // Enable hot module replacement
  },
};
