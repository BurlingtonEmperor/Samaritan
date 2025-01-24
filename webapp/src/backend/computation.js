let categoryDictionary = [];
let contigencyWords = [];
let userWordHistory = [];

class category_sorting {
  constructor (specific_word, associations) {
    this.specific_word = specific_word;
    this.associations = associations;
  }

  dictionaryDuplicateCheck () {
    for (let i = 0; i < categoryDictionary.length; i++) {
      let loweredDictionaryWord = categoryDictionary[i].toLowerCase();
      let loweredUserWord = this.specific_word.toLowerCase();

      if (loweredDictionaryWord == loweredUserWord) {
        return 1;
      }

      else {
        return 0;
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

  assignData () {
    let associationsArray = this.associations.split(",");

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

    parsedPreparation[1] =  associationsArray;
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

  for (let i = 0; i < easyNumArray.length; i++) {
    let x = findLargestNumber(easyNumArray);

    let swapStoreNum = easyNumArray[easyNumArray.length - 1];
    easyNumArray[easyNumArray.length - 1] = x[0];
    easyNumArray[x[1]] = swapStoreNum;
    rankingArray.push(x[0]);
    easyNumArray.pop();
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