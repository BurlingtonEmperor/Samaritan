let skillMatchResult = "";

class teamSkillCompare {
  constructor (blueAlliance, redAlliance) {
    this.blueAlliance = blueAlliance;
    this.redAlliance = redAlliance;
  }

  async runMatch () {
    let blueAlliancePoints = 0;
    let redAlliancePoints = 0;
    
    let diceRoll = 0;

    for (let i = 0; i < (this.blueAlliance.length * 2); i++) {
      switch (diceRoll) {
        case 0:
          await teamSkillAssessment(this.blueAlliance[i]);
          console.log(ultimateResult);
          blueAlliancePoints += ultimateResult;
          break;
        case 1:
          break;
      }
    }

    diceRoll = 0;

    for (let i = 0; i < (this.redAlliance.length * 2); i++) {
      switch (diceRoll) {
        case 0:
          await teamSkillAssessment(this.redAlliance[i]);
          console.log(ultimateResult);
          redAlliancePoints += ultimateResult;
          break;
        case 1:
          break;
      }
    }

    switch (true) {
      case (blueAlliancePoints < redAlliancePoints):
        skillMatchResult = "red likely";
        break;
      case (blueAlliancePoints > redAlliancePoints):
        skillMatchResult = "blue likely";
        break;
      default:
        skillMatchResult = "outcome unknown";
        break;
    }

    // if (blueAlliancePoints < redAlliancePoints) {
    //   skillMatchResult = "red likely";
    // }

    // else if (blueAlliancePoints > redAlliancePoints) {
    //   skillMatchResult = "blue likely";
    // }

    // else {
    //   skillMatchResult = "outcome unknown";
    // }
    
    return "success";
  }
}