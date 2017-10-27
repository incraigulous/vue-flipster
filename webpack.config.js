const webpack = require('webpack');
const merge = require('webpack-merge')
const path = require('path');

let config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        },
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = [
  // Config 1: For browser environment
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue-flipster.min.js',
      libraryTarget: 'window',
      library: 'VueFlipster'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin( {
        minimize : true,
        sourceMap : false,
        mangle: true,
        compress: {
          warnings: false
        }
      })
    ]
  }),
    
  // Config 2: For Node-based development environments
  merge(config, {
    entry: path.resolve(__dirname + '/src/index.js'),
    output: {
      filename: 'vue-flipster.js',
      libraryTarget: 'umd',

      // These options are useful if the user wants to load the module with AMD
      library: 'vue-flipster',
      umdNamedDefine: true
    }
  })
];