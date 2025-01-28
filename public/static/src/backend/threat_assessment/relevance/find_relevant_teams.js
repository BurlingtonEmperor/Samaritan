async function findRelevantTeams (candidateArray) {
  let relevantTeamArray = [];

  for (let i = 0; i < candidateArray.length; i++) {
    await teamSkillAssessment(candidateArray[i], 1);
    
  }
}

function relevancyCounter (relevantTeamNumber) {
  
}