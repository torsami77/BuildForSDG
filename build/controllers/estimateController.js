"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xmlJs = _interopRequireDefault(require("xml-js"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _estimator = _interopRequireDefault(require("../estimator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dirname = _path.default.resolve();

const logPath = _path.default.join(dirname, 'logs', 'access.log');

class EstimateController {
  static jsonResponseEstimation(req, res) {
    const estimation = (0, _estimator.default)(req.body);
    const {
      data,
      impact,
      severeImpact
    } = estimation;
    return res.status(200).send({
      data,
      impact,
      severeImpact
    });
  }

  static xmlResponseEstimation(req, res) {
    const estimation = (0, _estimator.default)(req.body);
    const {
      data,
      impact,
      severeImpact
    } = estimation;
    const json = {
      data,
      impact,
      severeImpact
    };
    const options = {
      compact: true,
      ignoreComment: true,
      spaces: 4
    };

    const xmlResult = _xmlJs.default.js2xml(json, options);

    return res.status(200).send(xmlResult);
  }

  static logsResponseEstimation(req, res) {
    _fs.default.readFile(logPath, 'utf8', (err, data) => {
      if (err) throw err;
      return res.status(200).send(data);
    });
  }

}

var _default = EstimateController;
exports.default = _default;
//# sourceMappingURL=estimateController.js.map