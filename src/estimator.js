import resultFromClasses from './helpers/resultFromClasses';

const covid19ImpactEstimator = (data) => {
  const estimation = resultFromClasses(data);
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

export default covid19ImpactEstimator;
