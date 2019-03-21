const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    modules: ['node_modules']
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '',
    filename: 'index.js',
    libraryTarget: 'umd'
  }
};
