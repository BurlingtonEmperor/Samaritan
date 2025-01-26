let skillMatchResult = "";
let finalBlueAlliancePoints = 0;
let finalRedAlliancePoints = 0;

class teamSkillCompare {
  constructor (blueAlliance, redAlliance) {
    this.blueAlliance = blueAlliance;
    this.redAlliance = redAlliance;
  }

  async runMatch () {
    let blueAlliancePoints = 0;
    let redAlliancePoints = 0;

    let allianceRunOne = this.blueAlliance.length;
    let allianceRunTwo = this.redAlliance.length;

    let allianceOne = this.blueAlliance;
    let allianceTwo = this.redAlliance;

    let skillMatchResultManifest = new Proxy({ result : 0 }, {
      set (target, prop, val) {
        console.log("skill match return");
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
        return true;
      }
    });

    // for (let i = 0; i < (this.blueAlliance.length * 2); i++) {
    //   switch (diceRoll) {
    //     case 0:
    //       await teamSkillAssessment(this.blueAlliance[i]);
    //       console.log(ultimateResult);
    //       blueAlliancePoints += ultimateResult;
    //       break;
    //     case 1:
    //       break;
    //   }
    // }

    async function blueAllianceLoop (blueAllianceCounter) {
      console.log("ran blue");

      const ultimateResultForComparison = new Proxy({ result : ultimateResult.result }, { 
        set (target, prop, val) {
          blueAlliancePoints += parseInt(val);    
          finalBlueAlliancePoints = blueAlliancePoints;
          
          console.log(`ultimateResulForComparison.result changed from ${target[prop]} to ${val} (blue)`);
          target[prop] = val;
          return true;
        }
      });
  
      ultimateResultForComparison.result = await teamSkillAssessment(allianceOne[blueAllianceCounter]); 
    }

    async function redAllianceLoop (redAllianceCounter) {
      console.log("ran red");

      const ultimateResultForComparison = new Proxy({ result : ultimateResult.result }, { 
        set (target, prop, val) {
          redAlliancePoints += parseInt(val);    
          finalRedAlliancePoints = redAlliancePoints;
          console.log(`ultimateResulForComparison.result changed from ${target[prop]} to ${val} (red)`);
          
          target[prop] = val;
          return true;
        }
      });
      
      ultimateResultForComparison.result = await teamSkillAssessment(allianceTwo[redAllianceCounter]); 
    }

    async function tryBlue () {
      for (let i = 0; i < allianceRunOne; i++) {
        await blueAllianceLoop(i);
      }

    }

    async function tryRed () {
      for (let i = 0; i < allianceRunTwo; i++) {
        await redAllianceLoop(i);
      }
    }

    async function whatsThePoint () {
      skillMatchResultManifest.result = "complete";
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
    
    await tryBlue();
    await tryRed();
    await whatsThePoint();
    return "success";
  }
}