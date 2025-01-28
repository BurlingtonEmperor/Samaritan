let htmlData = "";
let populatedComparisonLigand = 0;
let relevancyCalculation = 0;
let redStorage = [];

const ultimateResult = new Proxy({ result : 0 }, { 
  set (target, prop, val) {
    console.log(`ultimateResult.result changed from ${target[prop]} to ${val} (skillAssessment)`);
    populatedComparisonLigand = 1;
    target[prop] = val;
  }
});

const dummyParser = document.createElement("html");
dummyParser.style.display = "none";

async function teamSkillAssessment (teamNumber, yesStore) {
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
    // let usualScrapeNum = 8;
    // let awardNum;

    dummyParser.innerHTML = htmlData;
    const dummyParserSkillFinder = dummyParser.querySelectorAll(".text-end");
    // switch (true) {
    //   case (dummyParserSkillFinder.length > 12):
    //     usualScrapeNum = 9;
    //     break;
    // }
    console.log(dummyParserSkillFinder[8]);
    let awardNum = dummyParserSkillFinder[8].innerText.replace(" ", "");

    switch (yesStore) {
      case 1:
        redStorage.push(ultimateResult.result);
        break;
    }
    ultimateResult.result = parseInt(awardNum);

    if (dummyParserSkillFinder.length > 19) {
      ultimateResult.result = parseInt(dummyParserSkillFinder[9].innerText.replace(" ", ""));
      redStorage[redStorage.length - 1] = ultimateResult.result;
    }

    switch (relevancyCalculation) {
      case 1:
        relevancyCounter(teamNumber);
        break;
    }
  })
  .catch(error => {
    return error;
  });
}