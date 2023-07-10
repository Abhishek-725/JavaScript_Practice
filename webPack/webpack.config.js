const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  resolve: { alias, extensions, mainFields },
  module: {
    rules: [
      // Define loaders for different file types
      {
        test: /\.js$/, // Apply loader to JavaScript files
        exclude: /node_modules/, // Exclude node_modules directory
        //use: 'babel-loader' // Use babel-loader for JavaScript transpilation
      },
      // Add more loaders as needed for different file types
    ]
  },
  mode : 'development'
  // Define additional configuration options as needed
};
