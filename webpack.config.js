const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // Para generar el archivo HTML
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Para extraer el CSS

module.exports = {
  mode: 'production',  // Asegura que está en modo producción
  entry: './src/index.js',  // Punto de entrada de tu aplicación
  output: {
    filename: 'main.js',  // Archivo JavaScript generado
    path: path.resolve(__dirname, 'dist'),  // Directorio de salida
    clean: true,  // Limpiar la carpeta dist en cada nueva compilación
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,  // Usar el loader para extraer el CSS
          'css-loader',  // Cargar el archivo CSS
        ],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3030,  // Puedes mantener el puerto que prefieras
    open: true,  // Abrir el navegador automáticamente
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Usar un archivo index.html base desde src
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',  // Nombre del archivo CSS extraído
    }),
  ],
};
