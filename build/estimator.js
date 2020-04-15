"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _resultFromClasses = _interopRequireDefault(require("./helpers/resultFromClasses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const covid19ImpactEstimator = data => {
  const estimation = (0, _resultFromClasses.default)(data);
  const {
    estimatedImpact,
    estimatedSevereImpact
  } = estimation;
  return {
    data,
    impact: estimatedImpact,
    severeImpact: estimatedSevereImpact
  };
};

var _default = covid19ImpactEstimator;
exports.default = _default;
//# sourceMappingURL=estimator.js.map