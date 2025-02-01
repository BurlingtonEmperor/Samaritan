let categoryDictionary = [];
let contigencyWords = [];
let userWordHistory = [["test", 3]];

function returnRandomNumber (maxNum, condition) {
  let isOne = 0;
  
  if (condition == true) {
    isOne = 1;
  }

  return (Math.floor(Math.random() * maxNum) + isOne);
}

class category_sorting {
  constructor (specific_word, associations) {
    this.specific_word = specific_word;
    this.associations = associations;
  }

  dictionaryDuplicateCheck () {
    for (let i = 0; i < categoryDictionary.length; i++) {
      let loweredDictionaryWord = categoryDictionary[i][0].toLowerCase();
      let loweredUserWord = this.specific_word.toLowerCase();

      if (loweredDictionaryWord == loweredUserWord) {
        return 1;
      }

      else {
        return 0;
      }
    }
  }

  returnDuplicateDictionaryNum () {
    for (let i = 0; i < categoryDictionary.length; i++) {
      let loweredDictionaryWord = categoryDictionary[i][0].toLowerCase();
      let loweredUserWord = this.specific_word.toLowerCase();

      if (loweredDictionaryWord == loweredUserWord) {
        return i;
      }
    }
  }

  learnWord () {
    let duplicateCheckNum = category_sorting.dictionaryDuplicateCheck();

    switch (duplicateCheckNum) {
      default:
        break;
      case 0:
        category_sorting.assignData();
        break;
      case 1:
        return "duplicate word";
    }
  }
  
  // add a new word and its associations
  assignData () {
    let associationsArray = JSON.parse(this.associations);

    if (associationsArray == "" || associationsArray == null || associationsArray == undefined || String(associationsArray).includes("//.)-=")) {
      return "abort";
    }

    for (let i = 0; i < associationsArray.length; i++) {
      associationsArray[i] = associationsArray[i].replace(" ", "");

      switch (associationsArray[i]) {
        case "":
          let storeOriginalItem = associationsArray[i];
          let storeLastNum = associationsArray.length - 1;
          let storeLastItem = associationsArray[storeLastNum];

          associationsArray[i] = storeLastItem;
          associationsArray[storeLastNum] = storeOriginalItem;
          associationsArray = associationsArray.pop();
          break;
      }
    }

    let preparedForDictionary = this.specific_word + "//.)-=" + "][]-=+"
    let parsedPreparation = preparedForDictionary.split("//.)-=");

    parsedPreparation[1] = associationsArray;
    categoryDictionary.push(parsedPreparation);

    switch (defaultToContigencies) {
      default:
        return "added word";
      case 1:
        let sharedWords = 0;

        for (let i = 0; i < categoryDictionary.length; i++) {
          let targetArray = categoryDictionary[i];

          for (let x = 0; x < associationsArray.length; x++) {
            let targetAssociation = associationsArray[x];

            for (let y = 0; y < targetArray[1].length; y++) {
              if (targetAssociation.toLowerCase() == targetArray[1][y].toLowerCase()) {
                sharedWords++;
              }
            }
          }

          if (sharedWords > 1) {
            let contigencyNew = [];

            contigencyNew.push(this.specific_word, targetArray[0]);
            contigencyWords.push(contigencyNew);
          }
        }
        return "added word";
    }
  }

  learnNewAssociations () {
    let lookForWord = category_sorting.dictionaryDuplicateCheck();

    switch (lookForWord) {
      case 0:
        return "abort";
      case 1:
        categoryDictionary[category_sorting.returnDuplicateDictionaryNum()][1] = categoryDictionary[category_sorting.returnDuplicateDictionaryNum()][1].concat(this.associations);
        break;
    }
  }
}

function findLargestNumber (numArray) {
  let largestNum = numArray[0];
  let largPos = 0;

  for (let i = 0; i < numArray.length; i++) {
    if (largestNum < numArray[i]) {
      largestNum = numArray[i];
      largPos = i;
    }
  }
  
  let subjectArray = [];
  subjectArray.push(largestNum, largPos);
  return subjectArray;
}

function rankNumbers (numArray) {
  let easyNumArray = numArray;
  let rankingArray = [];

  if (easyNumArray.length < 2) {
    return "too little data";
  }
  
  for (let y = 0; y < easyNumArray.length; y++) {
    for (let i = 0; i < easyNumArray.length; i++) {
      let x = findLargestNumber(easyNumArray);
  
      let swapStoreNum = easyNumArray[easyNumArray.length - 1];
      easyNumArray[easyNumArray.length - 1] = x[0];
      easyNumArray[x[1]] = swapStoreNum;
      rankingArray.push(x[0]);
      easyNumArray.pop();
    }
  }

  return rankingArray;
}

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

function addWordCount (target_word) {
  let existsTurn = 0;
  let xStorage = 0;
  
  for (let i = 0; i < userWordHistory.length; i++) {
    let userWordHistoryExists = userWordHistory[i][0].toLowerCase();

    switch (target_word.toLowerCase()) {
      default:
        console.log("new word");
        let newWordHistory = [];
        newWordHistory.push(target_word, 1);
        userWordHistory.push(newWordHistory);
        return "success";
      case userWordHistoryExists:
        existsTurn = 1;
        xStorage = i;
        break;
    }
  }

  switch (existsTurn) {
    case 1:
      let originalCount = userWordHistory[xStorage][1];
      originalCount++;

      userWordHistory[xStorage][1] = originalCount;
      return "success";
  }
}