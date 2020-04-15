import estimatedClasses from '../utils';

const {
  Impact,
  SevereImpact
} = estimatedClasses;

const resultFromClasses = (data) => {
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

export default resultFromClasses;
