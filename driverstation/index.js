const typewriterPlace = document.getElementById("typewriter-place");
const driverstationConsole = document.getElementById("driverstation-console");

const passwordCheck = localStorage.getItem("samaritan-drivetrain-password");
let actualPassword = "";
let malkavian = 0;
let defaultModel = larry;

function consoleInput (consoleText) {
  driverstationConsole.innerHTML += "<p>" + consoleText + "</p>";
  scrollToBottom(driverstationConsole);
}

typeWriterEffect("WELCOME,_ADMIN", typewriterPlace, 40);
let checkRun = 0;
let finishedCheck = 0;
const checkInterval = setInterval(function () {
  switch (checkRun) {
    case 0:
      switch (String(passwordCheck)) {
        case "null":
          consoleInput("no password detected. suggestion: add a password!");
          break;
        default:
          consoleInput("password check: OK");
          actualPassword = String(passwordCheck);
          break;
      }
      break;
    case 1:
      try {
        console.log(larry);
        consoleInput("data model check: OK");

        try {
          malkavian = new offlineStrategy(defaultModel, actualPassword);
        }

        catch (error) {
          consoleInput(error);
        }
      }

      catch (error) {
        consoleInput(error);
        consoleInput("no models detected!");
      }
      break;
    default:
      consoleInput("Samaritan: READY");
      deType(typewriterPlace);
      clearInterval(checkInterval);

      setTimeout(function () {
        typeWriterEffect("READY_STATUS", typewriterPlace, 40);
        finishedCheck = 1;
      }, 1000);
      break;
  }
  checkRun++;
}, 700);

// const readyCheckInterval = setInterval(function () {
//   switch (finishedCheck) {
//     case 1:
      
//       break;
//   }
// }, 500);

const internetLight = document.getElementById("internet-light");
setInterval(function () {
  let isWifiOn = window.navigator.onLine;

  if (isWifiOn == true) {
    internetLight.style.color = "blue";
  }

  else {
    internetLight.style.color = "red";
  }
}, 500);

const manualInputLight = document.getElementById("manual-input-light");
let isManualInput = 0;

const manualInput = document.getElementById("manual-input");
const commandInput = document.getElementById("command-input");

manualInputLight.onclick = function () {
  switch (isManualInput) {
    case 0:
      isManualInput = 1;
      manualInputLight.style.color = "blue";
      consoleInput("type HELP for a list of commands");
      manualInput.style.display = "block";
      break;
    case 1:
      isManualInput = 0;
      manualInputLight.style.color = "red";
      manualInput.style.display = "none";
      break;
  }
}

let blueAllianceArr = [];
let redAllianceArr = [];

manualInput.onsubmit = function (event) {
  event.preventDefault();
  consoleInput(commandInput.value);
  let modifiedInput = String(commandInput.value).toLowerCase();

  if (String(commandInput.value).toLowerCase().substring(0, 7) == "blueall") {
    modifiedInput = "blueall";
    try {
      let blunk = String(commandInput.value).slice(8);
      blueAllianceArr = blunk.split(",");
    }
    
    catch (error) {
      consoleInput(error);
    }
  }

  if (String(commandInput.value).toLowerCase().substring(0, 6) == "redall") {
    modifiedInput = "redall";
    try {
      let blunk = String(commandInput.value).slice(7);
      redAllianceArr = blunk.split(",");
    }

    catch (error) {
      consoleInput(error);
    }
  }
  
  switch (modifiedInput) {
    case "help":
      consoleInput("HELP - gets a list of commands");
      consoleInput("BLUEALL team1, team2, team3 - manually input blue alliance");
      consoleInput("REDALL team1, team2, team3 - manually input red alliance");
      consoleInput("RELEVANT - returns relevant teams on both red and blue alliances");
      consoleInput("STRATEGY - returns strategy for both red and blue alliances");
      consoleInput("PASSWORD - enter a password");
      consoleInput("CLEAR - clear console");
      consoleInput("RESET - reset");
      break;
    case "blueall":
      consoleInput("Entered blue");
      break;
    case "redall":
      consoleInput("Entered red");
      break;
    case "relevant":
      if (blueAllianceArr.length < 1 || redAllianceArr.length < 1) {
        consoleInput("null arrays");
      }

      else {
        consoleInput("Most relevant team overall: " + malkavian.findMostRelevantTeam(1));
        consoleInput("Most relevant team on blue alliance: " + malkavian.findAllianceBreadWinner(blueAllianceArr, 1));
        consoleInput("Most relevant team on red alliance: " + malkavian.findAllianceBreadWinner(redAllianceArr, 1));
      }
      break;
    case "strategy":
      let strategyArrayBlue = malkavian.generatePushStrategies(blueAllianceArr, 1);
      let strategyArrayRed = malkavian.generatePushStrategies(redAllianceArr, 1);

      for (let i = 0; i < strategyArrayBlue.length; i++) {
        consoleInput("Team " + strategyArrayBlue[i][0] + " is a " + strategyArrayBlue[i][1]);
      }

      for (let i = 0; i < strategyArrayRed.length; i++) {
        consoleInput("Team " + strategyArrayRed[i][0] + " is a " + strategyArrayRed[i][1]);
      }
      break;
    case "password":
      let newPass = prompt("Password: ");
      actualPassword = newPass;
      localStorage.setItem("samaritan-drivetrain-password", newPass);
      consoleInput("Set password to " + newPass);
      break;
    case "clear":
      driverstationConsole.innerHTML = "";
      break;
    case "reset":
      window.location = "";
      break;
    default:
      consoleInput("No such command " + commandInput.value);
      break;
  }

  commandInput.value = "";
}