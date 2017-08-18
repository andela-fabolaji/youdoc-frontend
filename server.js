import express from 'express';
import webpack from 'webpack';
import open from 'open';
import path from 'path';
import winston from 'winston';
import compression from 'compression';
import webpackDevMiddleWare from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config';

require('dotenv').config({ silent: true });

const env = process.env.NODE_ENV || 'development';
const config = env === 'development'? webpackConfig.devConfig: webpackConfig.prodConfig;
const compiler = webpack(config);
const app = express();
const port = process.env.PORT;

if (env === 'development') {
  app.use(webpackDevMiddleWare(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
  }));

  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(compression());
  app.use(express.static(path.join(__dirname, 'dist')));
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/index.html'));
});

app.listen(port, (err) => {
  err ? winston.log(err) : open(`http://localhost:${port}`);
});


