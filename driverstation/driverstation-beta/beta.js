let currentModel = "";

function getLowestNum (numArray) {
  let lowestNum = numArray[0];
  for (let i = 0; i < numArray; i++) {
    if (numArray[i] < lowestNum) {
      lowestNum = numArray[i];
    }
  }

  return lowestNum;
}

class newSamaritanStrategy {
  constructor (matches, modelUsed, primaryTeam) {
    this.matches = matches;
    this.modelUsed = modelUsed;
    this.primaryTeam = primaryTeam;
  }

  preloadModel () {
    currentModel = JSON.parse(sjcl.decrypt("vampirefacial", this.modelUsed));
  }

  getMostRelevant () {
    return currentModel[0];
  }

  getAllianceThreats (blueArray, redArray) {
    let blueGet = [];

    for (let i = 0; i < blueArray.length; i++) {
      for (let x = 0; x < currentModel.length; x++) {
        if (parseInt(currentModel[x]) == parseInt(blueArray[i])) {
          blueGet.push(x);
        }
      }
    }

    let redGet = [];

    for (let i = 0; i < redArray.length; i++) {
      for (let x = 0; x < currentModel.length; x++) {
        if (parseInt(currentModel[x]) == parseInt(redArray[i])) {
          redGet.push(x);
        }
      }
    }

    const modelPosRelBlue = currentModel[getLowestNum(blueGet)];
    const modelPosRelRed = currentModel[getLowestNum(redGet)];
    const arrayToReturn = [];
    arrayToReturn.push(modelPosRelBlue);
    arrayToReturn.push(modelPosRelRed);

    return arrayToReturn;
  }
}