const path = require('path');

module.exports = {
  entry: './src/testPage.tsx', // Entry file for your TypeScript library
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tharikida-ui.bundle.js', // Output bundle file
    library: 'TharikidaUI', // Global variable for the library
    libraryTarget: 'umd', // Universal module definition for compatibility
    globalObject: 'this', // To work in the browser environment
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match both .ts and .tsx files
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader', // Use ts-loader to transpile TypeScript files
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'], // Process CSS files
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Resolve .ts, .tsx, .js, and .jsx
  },
  mode: 'production', // Set to 'development' for debugging
};
