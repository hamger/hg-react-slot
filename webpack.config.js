const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const sourceDirectory = path.resolve(__dirname, 'examples/src');
const targetDirectory = path.resolve(__dirname, 'examples/dist');

const isDev = process.env.NODE_ENV !== 'production';

const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    inject: true,
    template: path.resolve(__dirname, 'examples/src/index.html'),
    minify: {
      collapseWhitespace: !isDev,
      removeComments: !isDev,
      removeRedundantAttributes: !isDev,
    },
  }),
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('index-[contenthash:8].css'),
  new webpack.optimize.ModuleConcatenationPlugin(),
];

if (!isDev) {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }));
  plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
            warnings: false,
        },
      },
      sourceMap: false,
    }),
  );
}

module.exports = {
  context: sourceDirectory,
  entry: {
    index: './index.js',
  },
  output: {
    path: targetDirectory,
    filename: '[name]-[hash].js',
    hashDigestLength: 8,
  },
  devServer: {
    hot: true,
    contentBase: [sourceDirectory],
    watchContentBase: true,
    open: true,
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  plugins,
};
