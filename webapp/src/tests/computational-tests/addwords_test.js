let userWordHistory = [["cat", 3]];

function addWordCount (target_word) {
  for (let i = 0; i < userWordHistory.length; i++) {
    let userWordHistoryExists = userWordHistory[i][0].toLowerCase();
  
    switch (target_word.toLowerCase()) {
      default:
        let newWordHistory = [];
        newWordHistory.push(target_word, 1);
        userWordHistory.push(newWordHistory);
        break;
      case userWordHistoryExists:
        let originalCount = userWordHistory[i][1];
        originalCount++;
  
        userWordHistory[i][1] = originalCount;
        break;
    }
  }
}

addWordCount("cat");
addWordCount("dune");