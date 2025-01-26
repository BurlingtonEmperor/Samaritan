let htmlData = "";
let ultimateResult = "";

const dummyParser = document.createElement("html");
dummyParser.style.display = "none";

class teamSkillAssessment () {
  constructor (teamNumber) {
    this.teamNumber = teamNumber;
  }

  assessThreat () {
    fetch ("/get_html", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        url : "https://frc-events.firstinspires.org/team/" + String(teamNum)
      })
    })
    .then(response => response.text())
    .then(data => {
      htmlData = data;

      dummyParser.innerHTML = htmlData;
      const dummyParserSkillFinder = dummyParser.querySelectorAll(".text-end");
      const awardNum = dummyParserSkillFinder[8];
      
      ultimateResult = awardNum;
      return awardNum;
    })
    .catch(error => {
      return error;
    })
  }
}