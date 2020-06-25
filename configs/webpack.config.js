process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');


module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: './dist/'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        },
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack'
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new CopyWebpackPlugin([{
      from: './public/favicon.ico', to: './dist/favicon.ico'
    }]),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: './dist',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}