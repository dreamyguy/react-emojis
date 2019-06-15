const path = require('path');

module.exports = {
  entry: './src/app/components/Emoji.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'Emoji',
    libraryTarget: 'commonjs2'
  },
  externals: {
    react: 'commonjs react'
  },
  mode: 'production'
};
