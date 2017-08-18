import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const SRC = path.resolve(__dirname, "src");
const DIST = path.resolve(__dirname, "dist");

export default {
  entry: ['webpack-hot-middleware/client?reload=true', `${SRC}/index`],
  output: {
    path: DIST,
    publicpath: '/',
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    contentBase: SRC
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Youdoc::App',
      template: `${DIST}/index.html`,
      meta: [
        {
          name: 'description',
          content: 'A document management system'
        }
      ],
      lang: 'en-US',
      links: [
        'https://fonts.googleapis.com/css?family=Roboto',
      ]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        includePath: [SRC],
        exclude: /node_modules/,
        loader: ['babel-loader'],
        options: {
          presets: ['env']
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  }
}