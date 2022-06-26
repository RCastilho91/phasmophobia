const ghosts = require('../../data/ghosts.json');
const evidence = require('../../data/evidence.json');
const possibilities = require('../../../constants/possibilities');


const getInitialState = (type) => {
  const targetData = type === 'ghosts' ? ghosts : evidence
  let initialState = {};

  Object.keys(targetData).map((index, properties) => initialState[index] = possibilities.POSSIBLE);

  return initialState
}

console.log(
  getInitialState('ghosts')
)

console.log(
  getInitialState('evidence')
)

module.exports = getInitialState;
