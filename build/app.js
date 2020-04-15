"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _estimateController = _interopRequireDefault(require("./controllers/estimateController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
const {
  jsonResponseEstimation,
  xmlResponseEstimation,
  logsResponseEstimation
} = _estimateController.default;
const PORT = process.env.PORT || 5000;
const app = (0, _express.default)();

const dirname = _path.default.resolve();

const logPath = _path.default.join(dirname, 'logs', 'access.log');

const accessLogStream = _fs.default.createWriteStream(logPath, {
  flags: 'a'
});

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.text());
app.use(_bodyParser.default.json({
  type: 'application/json'
}));
app.use((0, _morgan.default)((tokens, req, res) => {
  let responseTime = parseInt(tokens['response-time'](req, res), 10).toString();
  if (responseTime.length === 1) responseTime = `0${responseTime}`;
  const logStr = [tokens.method(req, res), tokens.url(req, res), tokens.status(req, res), responseTime].join('\t\t');
  return `${logStr}ms`;
}, {
  stream: accessLogStream
}));
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
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map