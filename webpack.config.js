const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/Portfolio/', 
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', 
      filename: 'index.html', 
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/styles.css', to: 'styles.css' },
      ],
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8085, 
    open: true,
  },
};
