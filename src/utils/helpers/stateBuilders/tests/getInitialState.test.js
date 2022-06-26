const mockEvidence = require('./__mocks__/evidence.mock');
const mockGhosts = require('./__mocks__/ghosts.mock');
const possibilities = require('../../../../constants/possibilities');

const getInitialState = require('../getInitialState');


const targetStatus = possibilities.POSSIBLE;

const expectedGhostOutput = {
  spirit: targetStatus,
  wraith: targetStatus,
};

const expectedEvidenceOutput = {
  emf: targetStatus,
  temps: targetStatus,
};


describe('getInitialState', () => {
  it('returns the target evidence when prompted', () => {
    
  });

  it('returns the target ghosts when prompted', () => {

  });
});
