class offlineStrategy {
  constructor (dataModel, sjclPassword) {
    this.dataModel = dataModel;
    this.sjclPassword = sjclPassword;
  }

  decrpytModel () {
    return sjcl.decrypt(this.sjclPassword, this.dataModel);
  }

  encryptModel () {
    return sjcl.encrypt(this.sjclPassword, this.dataModel);
  }

  findMostRelevantTeam (isEncrypted) {
    switch (isEncrypted) {
      case 0:
        return this.dataModel[0];
      case 1:
        let decryptedModel = sjcl.decrypt(this.sjclPassword, this.dataModel);
        return JSON.parse(decryptedModel)[0];
      default:
        return "0 for false 1 for true see docs";
    }
  }

  findAllianceBreadWinner (myOwnAlliance, isEncrypted) {
    let modelToUse = [];
    switch (isEncrypted) {
      case 0:
        modelToUse = this.dataModel;
        break;
      case 1:
        modelToUse = sjcl.decrypt(this.sjclPassword, this.dataModel);
        break;
      default:
        return "0 for false 1 for true see docs";
    }

    let allianceMemberRankingArray = [];
    for (let i = 0; i < myOwnAlliance.length; i++) {
      let myOwnAllianceMember = myOwnAlliance[i];
      for (let x = 0; x < modelToUse.length; x++) {
        if (parseInt(myOwnAllianceMember) === parseInt(modelToUse[x])) {
          allianceMemberRankingArray.push(x);
        }
      }
    }
    
    let greatestPos = allianceMemberRankingArray[0];
    for (let i = 0; i < allianceMemberRankingArray.length; i++) {
      if (allianceMemberRankingArray[i] < greatestPos) {
        greatestPos = allianceMemberRankingArray[i];
      }
    }
    
    return modelToUse[greatestPos];
  }

  generatePushStrategies (myOwnAlliance, isEncrypted) {
    let modelToUse = [];
    switch (isEncrypted) {
      case 0:
        modelToUse = this.dataModel;
        break;
      case 1:
        modelToUse = sjcl.decrypt(this.sjclPassword, this.dataModel);
        break;
      default:
        return "0 for false 1 for true see docs";
    }

    let allianceMemberRankingArray = [];
    for (let i = 0; i < myOwnAlliance.length; i++) {
      let myOwnAllianceMember = myOwnAlliance[i];
      for (let x = 0; x < modelToUse.length; x++) {
        if (parseInt(myOwnAllianceMember) === modelToUse[x]) {
          allianceMemberRankingArray.push(x);
        }
      }
    }

    let recommendedStrategy = [];
    let allianceRankingThirds = Math.floor(allianceMemberRankingArray.length / 3);
    let decidingFactorRank = allianceMemberRankingArray[(2 * allianceRankingThirds) - 1];

    for (let i = 0; i < myOwnAlliance.length; i++) {
      if (allianceMemberRankingArray[i] > decidingFactorRank) {
        let teamNumberToPush = myOwnAlliance[i];
        let arrayToPush = [];
        arrayToPush.push(teamNumberToPush, "defense", "weak asset");
        recommendedStrategy.push(arrayToPush);
      }

      else {
        let teamArrToPush = myOwnAlliance[i];
        let arrayToPush = [];
        arrayToPush.push(teamArrToPush, "scorer", "asset");
        recommendedStrategy.push(arrayToPush);
      }
    }

    return recommendedStrategy;
  }

  checkIfTeamExists (teamNum, dataModel) {
    let myTeamNum = parseInt(teamNum);
    let doesExist = 0;

    for (let i = 0; i < dataModel.length; i++) {
      if (myTeamNum === dataModel[i]) {
        doesExist = 1;
      }
    }

    switch (doesExist) {
      case 0:
        return "no";
      default:
        return "exists";
    }
  }
}