while (true) {
  let commandPrompt = prompt("Command: ");

  switch (commandPrompt.toLowerCase()) {
    case "seekteam":
      let teamToSeek = prompt("Team number: ");
      teamToSeek = new inputParsing(teamToSeek);
      setTimeout(function () {
        let seekingArray = teamToSeek.searchEngine();
        console.log(seekingArray);

        switch (true) {
          case (String(seekingArray).includes("samaritan-error:")):
            alert(seekingArray);
            break;
          default:
            let filteredSearch = searchEngineFilter(seekingArray);
            let searchResources = new teamResourceAssessment(filteredSearch);

            alert("Threat level (lowest 1, highest 3): " + searchResources.assessThreat());
            break;
        }
      }, 100);
      break;
    case "setmatch":
      let blueAlliancePrompt = prompt("Enter blue alliance team numbers (seperate by comma): ");
      let blueAllianceArr = blueAlliancePrompt.split(",").replace(" ", "");
      
      let redAlliancePrompt = prompt("Enter red alliance team numbers (seperate by comma): ");
      let redAllianceArr = redAlliancePrompt.split(",").replace(" ", "");

      let newSimMatch = new teamMatchAssessment(blueAllianceArr, redAllianceArr);
      alert(newSimMatch.runMatch());
      break;
    default:
      alert("not a valid command");
      break;
  }
}