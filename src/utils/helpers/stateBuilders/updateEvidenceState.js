const getEvidenceProbability = require('../probabilities/getEvidenceProbability');


function updateEvidenceState(currentEvidenceState, activeGhosts) {
  let updatedState = {...currentEvidenceState};

  Object.keys(currentEvidenceState).map((evidence) => {
    updatedState[evidence] = {
      status: currentEvidenceState[evidence].status,
      probability: getEvidenceProbability(
        activeGhosts,
        evidence,
        currentEvidenceState[evidence].status,
      ),
    };
  });

  return updatedState;
};


module.exports = updateEvidenceState;
