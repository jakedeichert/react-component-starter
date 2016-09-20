/* eslint-env node */
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'lib/'),
    filename: 'index.js',
    // Bundle it as a library
    library: 'MyComponent',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react', 'stage-1'],
        },
      },
    ],
  },
  externals: {
    // Use external version of React
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
    // Use this for production.
    // new webpack.DefinePlugin({
    //    'process.env': {
    //        'NODE_ENV': '"production"'
    //    }
    // }),
    // new webpack.optimize.DedupePlugin()
    // new webpack.optimize.OccurrenceOrderPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true,
  },
  resolve: {
    // Allows you to require('file') instead of require('file.js')
    extensions: ['', '.js'],
    // Searches these directories for modules.
    root: [
      path.resolve('./node_modules'),
      path.resolve('./src'),
    ],
  },
  // Create Sourcemaps for the bundle
  // devtool: 'source-map'
};
