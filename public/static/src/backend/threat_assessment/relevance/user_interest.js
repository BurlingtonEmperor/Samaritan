let teamInterestArr = [2876];

function addTeamCount (target_team) {
  teamInterestArr.push(parseInt(target_team));
}

function suggestTeams () {
  return teamInterestArr.sort((a,b) =>
        teamInterestArr.filter(v => v===a).length
      - teamInterestArr.filter(v => v===b).length
  ).pop();
}