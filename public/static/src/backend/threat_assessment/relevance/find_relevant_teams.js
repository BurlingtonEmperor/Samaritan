let relevantTeamArray = [];

async function prepareRelevantTeams (candidateArray) {
  redStorage = [];
  let tempRelStor = [];

  for (let i = 0; i < candidateArray.length; i++) {
    await teamSkillAssessment(candidateArray[i], 1);
    tempRelStor.push(candidateArray[i]);
  }

  const awaitNetInt = setInterval(function () {
    if (redStorage.length === candidateArray.length) {
      for (let i = 0; i < candidateArray.length; i++) {
        let teamArrToPush = [];
        teamArrToPush.push(candidateArray[i]);
        teamArrToPush.push(redStorage[i]);

        relevantTeamArray.push(teamArrToPush);
      }
    }
  }, 500);
}

async function findMostRelevantTeam () {
  switch (true) {
    case (relevantTeamArray.length < 1):
      return "abort";
  }

  let mostSkilledTeam = 0;
  let skillTeamAwardNum = -1;

  for (let i = 0; i < relevantTeamArray.length; i++) {
    let teamAwardAmount = relevantTeamArray[i][1];
    let actualTeamNumber = relevantTeamArray[i][0];
    
    if (teamAwardAmount > skillTeamAwardNum) {
      mostSkilledTeam = actualTeamNumber;
      skillTeamAwardNum = teamAwardAmount;
    }
  }

  return mostSkilledTeam;
}

function relevancyCounter (relevantTeamNumber) {
  
}