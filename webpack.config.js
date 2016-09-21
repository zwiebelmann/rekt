module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: './dist/bundle.js',
    publicPath: './dist'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: "./dist",
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
