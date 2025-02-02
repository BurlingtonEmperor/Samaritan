const predictMatchButton = document.getElementById("predictMatchButton");
const relevantTeamsButton = document.getElementById("relevantTeamsButton");
const assessThreatsButton = document.getElementById("assessThreatsButton");
const manualCommandsButton = document.getElementById("manualCommandsButton");

predictMatchButton.onclick = function () {
  // not a complete function so far
}

relevantTeamsButton.onclick = function () {
  relevantTeamsSec.style.display = "block";
  sammySec.style.display = "none";
}

assessThreatsButton.onclick = function () {
  
}

manualCommandsButton.onclick = function () {
  manualCommandSec.style.display = "block";
  sammySec.style.display = "none";
}

const commandInputBackButton = document.getElementById("commandInputBackButton");
const relevantTeamsBackButton = document.getElementById("relevantTeamsBackButton");

commandInputBackButton.onclick = function () {
  sammySec.style.display = "block";
  manualCommandSec.style.display = "none";
}

relevantTeamsBackButton.onclick = function () {
  sammySec.style.display = "block";
  relevantTeamsSec.style.display = "none";
}