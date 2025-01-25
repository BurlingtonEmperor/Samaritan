class teamMatchAssessment {
  constructor (blueAlliance, redAlliance) {
    this.blueAlliance = blueAlliance;
    this.redAlliance = redAlliance;
  }

  runMatch () {
    let blueAllianceThreatLevel = 0;
    let redAllianceThreatLevel = 0;

    if (this.blueAlliance.length < 1 || this.redAlliance.length < 1) {
      return "abort";
    }

    for (let i = 0; i < this.blueAlliance.length; i++) {
      let individualBlueAllianceTeam = new teamResourceAssessment(this.blueAlliance[i]);
      blueAllianceThreatLevel += individualBlueAllianceTeam.assessThreat();
    }

    for (let i = 0; i < this.redAlliance.length; i++) {
      let individualRedAllianceTeam = new teamResourceAssessment(this.redAlliance[i]);
      redAllianceThreatLevel += individualRedAllianceTeam.assessThreat();
    }

    if (blueAllianceThreatLevel > redAllianceThreatLevel) {
      return "blue likely";
    }

    else if (blueAllianceThreatLevel < redAllianceThreatLevel) {
      return "red likely";
    }

    else {
      return "outcome unknown";
    }
  }
}