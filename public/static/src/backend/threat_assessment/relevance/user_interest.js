let teamInterestArr = [["2876", 3]];

function addTeamCount (target_word) {
  let existsTurn = 0;

  for (let i = 0; i < teamInterestArr.length; i++) {
    let userWordHistoryExists = teamInterestArr[i][0].toLowerCase();

    switch (target_word.toLowerCase()) {
      default:
        console.log("new word");
        let newWordHistory = [];
        newWordHistory.push(target_word, 1);
        teamInterestArr.push(newWordHistory);
        return "success";
      case userWordHistoryExists:
        existsTurn = 1;
        break;
    }
  }

  switch (existsTurn) {
    case 1:
      let originalCount = teamInterestArr[i][1];
      originalCount++;

      teamInterestArr[i][1] = originalCount;
      return "success";
  }
}

function suggestTeams (user_use_countArray) {
  let countingArray = user_use_countArray;
  let mostUsedWord_count = countingArray[0][1];
  let mostUsedWord_location = 0;

  for (let i = 0; i < countingArray.length; i++) {
    if (countingArray[i][1] > mostUsedWord_count) {
      mostUsedWord_count = countingArray[i][1];
      mostUsedWord_location = i;
    }
  }

  return countingArray[mostUsedWord_location][0];
}