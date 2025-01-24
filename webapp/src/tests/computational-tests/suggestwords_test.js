let suggestWordsTestArray = [["dog", 2], ["cat", 5], ["pontiac", 3], ["corvette", 8]];

function suggestWords (user_use_countArray) {
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

suggestWords(suggestWordsTestArray);