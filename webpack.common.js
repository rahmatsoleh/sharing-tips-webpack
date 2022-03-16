const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/script/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/, // Format file yang dipakai
        use : {
          loader: 'file-loader', // Plugin file-loader yang digunakan
          options: {
            name: '[name].[ext]', // nama file dan extension yang akan dihasilkan
            outputPath: 'images', // path yang akan dihasilkan sesuai konfigurasi output
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src/images'), // Direktori yang akan dicopy
    //       to: path.resolve(__dirname, 'dist/images'), // Direktori yang akan dihasilkan
    //     }
    //   ]
    // }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
  ],
};
