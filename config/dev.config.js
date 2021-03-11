
const common = require('./webpack.config.js')
const { merge } = require('webpack-merge')
const resolveApp = require('./path.js')
const host = process.env.HOST ;
module.exports = merge({
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[hash].js'
  },
  devServer: {
    contentBase: resolveApp('dist'),
    port: 9878,
    host,
    // tips:false,
    // sourceMap:process.env.NODE_ENV ==='development'?'source-map':false,
    // https: false,
    open: true,
    compress: false,
    clientLogLevel:'silent',
    // watchContentBase:true,
    // lazy:true,
    // https:true,
    // bonjour: true,
  }
}, common)
