"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const normaliseToDays = (periodType, timeToElapse) => {
  switch (periodType) {
    case 'weeks':
      return timeToElapse * 7;

    case 'months':
      return timeToElapse * 30;

    default:
      return timeToElapse;
  }
};

var _default = normaliseToDays;
exports.default = _default;
//# sourceMappingURL=normaliseToDays.js.map