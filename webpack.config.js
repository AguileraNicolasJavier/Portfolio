const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production', // Cambiado a 'production' para la versión final
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/Portfolio/', // Reemplaza '<nombre_del_repositorio>' con el nombre de tu repositorio en GitHub
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
      template: './src/index.html', // Ruta de tu archivo HTML
      filename: 'index.html', // Se generará el HTML dentro de dist
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/styles.css', to: 'styles.css' }, // Copia tu CSS
      ],
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // Usa 'static' en lugar de 'contentBase'
    port: 8085, // El puerto en el que se servirá la app
    open: true, // Esto abrirá la app automáticamente en tu navegador
  },
};
