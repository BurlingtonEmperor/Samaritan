let htmlData = "";
const ultimateResult = new Proxy({ result : 0 }, { 
  set (target, prop, val) {
    console.log(`ultimateResult.result changed from ${target[prop]} to ${val}`);
    target[prop] = val;
  }
});


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
      
    ultimateResult.result = parseInt(awardNum);
    return ultimateResult.result;
  })
  .catch(error => {
    return error;
  });
}