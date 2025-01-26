let skillMatchResult = "";

class teamSkillCompare {
  constructor (blueAlliance, redAlliance) {
    this.blueAlliance = blueAlliance;
    this.redAlliance = redAlliance;
  }

  runMatch () {
    let blueAlliancePoints = 0;
    let redAlliancePoints = 0;

    for (let i = 0; i < this.blueAlliance.length; i++) {
      teamSkillAssessment(this.blueAlliance[i]);
      setTimeout(function () {
        console.log(ultimateResult);
        blueAlliancePoints += ultimateResult;
      }, 10);
    }

    for (let i = 0; i < this.redAlliance.length; i++) {
      teamSkillAssessment(this.redAlliance[i]);
      specificAllianceTeam.assessThreat();
      setTimeout(function () {
        console.log(ultimateResult);
        redAlliancePoints += ultimateResult;
      }, 10);
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