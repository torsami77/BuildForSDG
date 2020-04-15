"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Impact,
  SevereImpact
} = _utils.default;

const resultFromClasses = data => {
  const impactResult = new Impact(data);
  const severeImpactResult = new SevereImpact(data);
  const estimatedImpact = {
    currentlyInfected: impactResult.currentlyInfected(),
    infectionsByRequestedTime: impactResult.infectionsByRequestedTime(),
    severeCasesByRequestedTime: impactResult.severeCasesByRequestedTime(),
    hospitalBedsByRequestedTime: impactResult.hospitalBedsByRequestedTime(),
    casesForICUByRequestedTime: impactResult.casesForICUByRequestedTime(),
    casesForVentilatorsByRequestedTime: impactResult.casesForVentilatorsByRequestedTime(),
    dollarsInFlight: impactResult.dollarsInFlight()
  };
  const estimatedSevereImpact = {
    currentlyInfected: severeImpactResult.currentlyInfected(),
    infectionsByRequestedTime: severeImpactResult.infectionsByRequestedTime(),
    severeCasesByRequestedTime: severeImpactResult.severeCasesByRequestedTime(),
    hospitalBedsByRequestedTime: severeImpactResult.hospitalBedsByRequestedTime(),
    casesForICUByRequestedTime: severeImpactResult.casesForICUByRequestedTime(),
    casesForVentilatorsByRequestedTime: severeImpactResult.casesForVentilatorsByRequestedTime(),
    dollarsInFlight: severeImpactResult.dollarsInFlight()
  };
  return {
    estimatedImpact,
    estimatedSevereImpact
  };
};

var _default = resultFromClasses;
exports.default = _default;
//# sourceMappingURL=resultFromClasses.js.map