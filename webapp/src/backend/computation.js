let categoryDictionary = [];
let contigencyWords = [];

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
    categoryDictionary.append(parsedPreparation);

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
            contigencyWords.append((this.specific_word + "," + targetArray[0]).split(","));
          }
        }
        return "added word";
    }
  }
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