const ghosts = require('../../data/ghosts.json');

const possibilities = require('../../../constants/possibilities');


function getEvidenceProbability(activeGhosts, targetEvidence, targetEvidenceStatus) {
  if(targetEvidenceStatus !== possibilities.POSSIBLE){
    return targetEvidenceStatus === possibilities.CONFIRMED ? 1 : 0;
  };

  let ghostsWithEvidence = activeGhosts.map((ghost) => ghosts[ghost].evidence.includes(targetEvidence));
  ghostsWithEvidence = ghostsWithEvidence.filter((result) => result === true);

  return (ghostsWithEvidence.length / activeGhosts.length).toFixed(3);
};


module.exports = getEvidenceProbability;
