let blueAllianceTest = ["5", "502", "101"];
let redAllianceTest = ["302", "1", "2876"];
//Red alliance should win
let newMatchTest = new teamSkillCompare(blueAllianceTest, redAllianceTest);
await newMatchTest.runMatch();
function testFunc () {
  alert("test successful, match results: " + getTrueSkillComparison());
}

newMatchTest.awaitInternet(testFunc);
// getTrueSkillComparison();

// setTimeout(function () {
//   console.log(getTrueSkillComparison());
// }, 100);