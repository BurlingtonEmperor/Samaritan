while (true) {
  let commandPrompt = prompt("Command: ");

  switch (commandPrompt.toLowerCase()) {
    case "seekteam":
      let teamToSeek = prompt("Team number: ");
      switch (checkIfTeamExists(teamToSeek)) {
        case "exists":
          teamToSeek = new inputParsing(teamToSeek);
          let seekingArray = teamToSeek.searchEngine();
          
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
          break;
        case "non-existant":
          alert("team " + String(teamToSeek) + " doesn't exist");
          break;
      }
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