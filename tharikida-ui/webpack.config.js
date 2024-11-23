const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry file for your library
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tharikida-ui.bundle.js', // Output bundle file
    library: 'TharikidaUI', // Global variable for the library
    libraryTarget: 'umd', // Universal module definition for compatibility
    globalObject: 'this', // To work in browser environment
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile JS files with Babel
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Process CSS files
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'production', // Set to 'development' for debugging
};
