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
  
      switch (true) {
        case (blueAllianceThreatLevel > redAllianceThreatLevel):
          return "blue likely";
        case (blueAllianceThreatLevel < redAllianceThreatLevel):
          return "red likely";
        default:
          return "outcome unknown";
      }
    }
  }

const blueAllianceTest = [["snapchat", "reddit", "instagram", "github", "youtube", "website"], ["snapchat", "bluealliance", "instagram", "frc", "youtube", "website"], ["snapchat", "reddit", "instagram", "github", "youtube", "website"]];
const redAllianceTest = [["snapchat", "reddit", "instagram", "github", "youtube", "website"], ["snapchat", "bluealliance", "instagram", "frc", "youtube", "frc"], ["snapchat", "facebook", "instagram", "chiefdelphi", "youtube", "snapchat"]];
let testMatch = new teamMatchAssessment(blueAllianceTest, redAllianceTest);
alert(testMatch.runMatch());