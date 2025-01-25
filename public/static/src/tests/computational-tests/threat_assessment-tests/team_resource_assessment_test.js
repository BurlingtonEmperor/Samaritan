let socialMediaSites = ["facebook", "instagram", "linkedin", "snapchat", "x.com"];
let assetSites = ["github", "youtube"];
let resourceSites = ["bluealliance", "frc", "first"];

let maxRange = 10;
let minRange = 3;

let teamThreatLevel = 1;

class teamResourceAssessment {
  constructor (threatData) {
    this.threatData = threatData;
  }

  assessThreat () {
    let treatedThreatData = this.threatData;
    for (let i = 0; i < treatedThreatData.length; i++) {
      for (let x = 0; x < socialMediaSites.length; x++) {
        if (treatedThreatData[i].includes(socialMediaSites[x])) {
          treatedThreatData[i] = "ignore";
        }
      }
    }
    
    for (let i = 0; i < treatedThreatData.length; i++) {
      switch (treatedThreatData[i]) {
        default:
          let raiseThreatLevel = 0;
          for (let x = 0; x < assetSites.length; x++) {
            if (treatedThreatData[i].includes(assetSites[x])) {
              raiseThreatLevel = 1;
              treatedThreatData[i] = "ignore";
            }
          }

          switch (raiseThreatLevel) {
            case 1:
              teamThreatLevel++;
              break;
          }
          break;
        case "ignore":
          break;
      }
    }

    for (let i = 0; i < treatedThreatData.length; i++) {
      switch (treatedThreatData[i]) {
        default:
          for (let x = 0; x < resourceSites.length; x++) {
            if (treatedThreatData[i].includes(resourceSites[x])) {
              treatedThreatData[i] = "ignore";
            }
          }
          break;
        case "ignore":
          break;
      }
    }
    
    let assignThreatLevel = 0;
    for (let i = 0; i < treatedThreatData.length; i++) {
      switch (treatedThreatData[i]) {
        default:
          assignThreatLevel = 1;
          break;
        case "ignore":
          break;
      }
    }

    switch (assignThreatLevel) {
      case 1:
        teamThreatLevel++;
        break;
    }

    return teamThreatLevel;
  }
}

let sampleThreatData = ["https://www.thebluealliance.com/team/2876", "https://frc-events.firstinspires.org/team/2876", "https://devilbotz.org/", "https://frc-events.firstinspires.org/2024/team/2876", "https://www.facebook.com/team2876/", "https://github.com/DevilBotz2876", "https://www.thebluealliance.com/team/2876/2024", "https://x.com/bhsrobotix?lang=en", "https://x.com/bhsrobotix?lang=en", "https://devilbotz.org/Kick-Off/", "https://www.instagram.com/devilbotz2876/"]
const theThreat = new teamResourceAssessment(sampleThreatData);

alert(theThreat.assessThreat());