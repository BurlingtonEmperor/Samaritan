let skillMatchResult = "";

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

    let blueAllianceCounter = 0;
    async function blueAllianceLoop () {
      console.log("ran");
      if (blueAllianceCounter == allianceRunOne) {
        console.log("blue complete: " + blueAllianceCounter + " " + allianceRunOne);
        return 0;
      }

      const ultimateResultForComparison = new Proxy({ result : ultimateResult.result }, { 
        set (target, prop, val) {
          console.log(`ultimateResulForComparison.result changed from ${target[prop]} to ${val}`);
          blueAlliancePoints += val;    
          blueAllianceCounter++;
          target[prop] = val;
          await blueAllianceLoop();
        }
      });

      await teamSkillAssessment(allianceOne[blueAllianceCounter]); 
    }

    let redAllianceCounter = 0;
    async function redAllianceLoop () {
      console.log("ran");
      if (redAllianceCounter == allianceRunTwo) {
        skillMatchResultManifest.result = "complete";
        return 0;
      }

      const ultimateResultForComparison = new Proxy({ result : ultimateResult.result }, { 
        set (target, prop, val) {
          console.log(`ultimateResulForComparison.result changed from ${target[prop]} to ${val}`);
          redAlliancePoints += val;    
          redAllianceCounter++;
          target[prop] = val;
          redAllianceLoop();
        }
      });

      await teamSkillAssessment(allianceTwo[blueAllianceCounter]); 
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
    
    await blueAllianceLoop();
    await redAllianceLoop();
    return "success";
  }
}