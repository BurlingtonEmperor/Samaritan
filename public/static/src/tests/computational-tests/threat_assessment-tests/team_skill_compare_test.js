let blueAllianceTest = ["5", "502", "101"];
let redAllianceTest = ["302", "1", "2876"];
//Red alliance should win
let newMatchTest = new teamSkillCompare(blueAllianceTest, redAllianceTest);
newMatchTest.runMatch();
console.log(skillMatchResult);