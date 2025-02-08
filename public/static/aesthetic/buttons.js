const predictMatchButton = document.getElementById("predictMatchButton");
const relevantTeamsButton = document.getElementById("relevantTeamsButton");
const assessThreatsButton = document.getElementById("assessThreatsButton");
const manualCommandsButton = document.getElementById("manualCommandsButton");

const sammyButton = document.querySelectorAll(".sam-button");

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

// Nabla
let nablaClicked = 1;

async function adminMode () {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  
  for (let i = 0; i < sammyButton.length; i++) {
    sammyButton[i].style.color = "black";
    sammyButton[i].style.border = "1px solid black";
  }

  sammySec.style.display = "none";
  relevantTeamsSec.style.display = "none";
  manualCommandSec.style.display = "none";

  await actualType("ENTERING_ADMIN_MODE", samaritanInterface, 40);
}

desktopNabla.onclick = async function () {
  switch (nablaClicked) {
    case 0:
      adminMode();
      nablaClicked = 1;
      break;
  }
}