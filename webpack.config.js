const path = require('path');

module.exports = {
  mode: 'production',  // Agrega esta línea
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3030, // Puedes mantener el puerto que prefieras
    open: true,
  },
};