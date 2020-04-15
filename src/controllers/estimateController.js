import convert from 'xml-js';
import fs from 'fs';
import path from 'path';
import estimator from '../estimator';

const dirname = path.resolve();
const logPath = path.join(dirname, 'logs', 'access.log');

class EstimateController {
  static jsonResponseEstimation(req, res) {
    const estimation = estimator(req.body);
    const { data, impact, severeImpact } = estimation;
    return res.status(200).send({
      data, impact, severeImpact
    });
  }

  static xmlResponseEstimation(req, res) {
    const estimation = estimator(req.body);
    const { data, impact, severeImpact } = estimation;
    const json = {
      data, impact, severeImpact
    };
    const options = { compact: true, ignoreComment: true, spaces: 4 };
    const xmlResult = convert.js2xml(json, options);
    return res.status(200).send(xmlResult);
  }

  static logsResponseEstimation(req, res) {
    fs.readFile(logPath, 'utf8', (err, data) => {
      if (err) throw err;
      return res.status(200).send(data);
    });
  }
}

export default EstimateController;
