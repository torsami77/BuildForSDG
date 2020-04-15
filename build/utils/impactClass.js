"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _normaliseToDays = _interopRequireDefault(require("../helpers/normaliseToDays"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Impact {
  constructor(input) {
    this.region = input.region;
    this.periodType = input.periodType;
    this.timeToElapse = parseInt(input.timeToElapse, 10);
    this.reportedCases = parseInt(input.reportedCases, 10);
    this.population = parseInt(input.reportedCases, 10);
    this.totalHospitalBeds = input.reportedCases;
  }

  currentlyInfected() {
    return this.reportedCases * 10;
  }

  infectionsByRequestedTime() {
    return this.currentlyInfected() * 2 ** Math.trunc((0, _normaliseToDays.default)(this.periodType, this.timeToElapse) / 3);
  }

  severeCasesByRequestedTime() {
    return Math.trunc(this.infectionsByRequestedTime() * 0.15);
  }

  hospitalBedsByRequestedTime() {
    const availableBeds = this.totalHospitalBeds * 0.35;
    return Math.trunc(availableBeds - this.severeCasesByRequestedTime());
  }

  casesForICUByRequestedTime() {
    return this.infectionsByRequestedTime() / 100 * 5;
  }

  casesForVentilatorsByRequestedTime() {
    return this.infectionsByRequestedTime() / 100 * 2;
  }

  dollarsInFlight() {
    return this.severeCasesByRequestedTime() * parseInt(this.region.avgDailyIncomePopulation, 10) * parseInt(this.region.avgDailyIncomeInUSD, 10) / (0, _normaliseToDays.default)(this.periodType, this.timeToElapse);
  }

}

var _default = Impact;
exports.default = _default;
//# sourceMappingURL=impactClass.js.map