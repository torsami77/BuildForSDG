/* eslint-disable no-unused-vars */
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import EstimateController from './controllers/estimateController';

const {
  jsonResponseEstimation,
  xmlResponseEstimation,
  logsResponseEstimation
} = EstimateController;

const PORT = process.env.PORT || 5000;
const app = express();

const dirname = path.resolve();
const logPath = path.join(dirname, 'logs', 'access.log');
const accessLogStream = fs.createWriteStream(logPath, { flags: 'a' });


const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.use(
  morgan(
    (tokens, req, res) => {
      let responseTime = parseInt(tokens['response-time'](req, res), 10).toString();

      if (responseTime.length === 1) responseTime = `0${responseTime}`;

      const logStr = [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        responseTime
      ].join('\t\t');

      return `${logStr}ms`;
    },
    { stream: accessLogStream }
  )
);


app.get('/', (req, res) => {
  res.status(200).json({
    data: {
      message: 'Welcome to #BuildForSDG-Challenge-2020'
    }
  });
});

app.use('/api/v1/on-covid-19/json', jsonResponseEstimation);
app.use('/api/v1/on-covid-19/xml', xmlResponseEstimation);
app.use('/api/v1/on-covid-19/logs', logsResponseEstimation);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    errors: {
      message: err.message,
      error: {}
    }
  });
});


app.listen(PORT);

export default app;
