const ghosts = require('../../data/ghosts.json');
const evidence = require('../../data/evidence.json');
const possibilities = require('../../../constants/possibilities');

const getEvidenceProbability = require('../probabilities/getEvidenceProbability');

const ghostInitialStateBuilder = () => {
  let initialState = {};

  Object.keys(ghosts).map((ghost) => initialState[ghost] = possibilities.POSSIBLE);

  return initialState
}

const evidenceInitialStateBuilder = () => {
  let initialState = {};

  Object.keys(evidence).map((evidence) => {
    initialState[evidence] = {
      status: possibilities.POSSIBLE,
      probability: getEvidenceProbability(
        Object.keys(ghosts),
        evidence,
        possibilities.POSSIBLE
      ),
    };
  });

  return initialState
}


module.exports = {
  ghostInitialStateBuilder,
  evidenceInitialStateBuilder,
};
