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

export default normaliseToDays;
