const mockGhosts = {
  spirit: {
    label: 'Spirit',
    description: 'A Spirit is the most common Ghost you will ever come across. However, it is still very powerful and dangerous. They are usually discovered at one of their hunting grounds after an unexplained death.',
    strength: 'Nothing.',
    weakness: 'Using Smudge Sticks on a Spirit will stop it attacking for a long period of time.',
    evidence: ['emf', 'writing', 'box'],
    secondaryEvidence: [],
    huntingRange: 0.5,
    huntingRangeNote: 'team sanity',
    hints: [
      'Spirits can often be very active as they don\'t have much idle time.',
      'When smudged, a spirit will not hunt for at least 180 seconds. Others will hunt in slightly over 90 seconds.',
    ],
  },

  wraith: {
    label: 'Wraith',
    description: 'A wraith is one of the most dangerous Ghosts you will find. It is also the only known Ghost that has the ability of flight and has sometimes been known to travel through walls.',
    strength: 'Wraiths almost never touch the ground, meaning it can\'t be tracked by footsteps.',
    weakness: 'Wraiths have a toxic reaction to Salt.',
    evidence: ['emf', 'box', 'dots'],
    secondaryEvidence: [],
    huntingRange: 0.5,
    huntingRangeNote: 'team sanity',
    hints: [
      'Doesn\'t leave UV-visible footprints after stepping on salt.',
      'Can sporadically teleport to a random player.',
      'When teleporting to a player, Wraiths will leave EMF evidence.',
    ],
  },
};


module.exports = mockGhosts;
