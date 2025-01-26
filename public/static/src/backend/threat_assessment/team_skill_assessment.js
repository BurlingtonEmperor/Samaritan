let htmlData = "";
let ultimateResult = "";

const dummyParser = document.createElement("html");
dummyParser.style.display = "none";

async function teamSkillAssessment (teamNumber) {
  fetch ("/get_source", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({
      url : "https://frc-events.firstinspires.org/team/" + String(teamNumber)
    })
  })
  .then(response => response.text())
  .then(data => {
    htmlData = data;

    dummyParser.innerHTML = htmlData;
    const dummyParserSkillFinder = dummyParser.querySelectorAll(".text-end");
    let awardNum = dummyParserSkillFinder[8].innerText.replace(" ", "");
      
    ultimateResult = parseInt(awardNum);
    return "success";
  })
  .catch(error => {
    return error;
  });
}