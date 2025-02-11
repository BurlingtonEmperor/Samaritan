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
        typeWriterEffect("I_WILL_PROTECT_YOU", typewriterPlace, 40);
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

manualInputLight.onclick = function () {
  switch (isManualInput) {
    case 0:
      isManualInput = 1;
      manualInputLight.style.color = "blue";
      break;
    case 1:
      isManualInput = 0;
      manualInputLight.style.color = "red";
      break;
  }
}