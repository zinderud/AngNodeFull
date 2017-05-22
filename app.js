import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
/*import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config';*/
import indexRoute from './server/routes/index';
import roleRoute from './server/routes/roleRoute';
import userRoute from './server/routes/userRoute';

const port = parseInt(process.env.PORT, 10) || 8000;

// Set up the express app
const app = express();

/*if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}*/
// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//for angular path or react path
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(indexRoute());
app.use(roleRoute());
app.use(userRoute());
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;