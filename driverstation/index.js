const typewriterPlace = document.getElementById("typewriter-place");
const driverstationConsole = document.getElementById("driverstation-console");

function consoleInput (consoleText) {
  driverstationConsole.innerText += "<p>" + consoleText + "</p>";
  scrollToBottom(driverstationConsole);
}

typeWriterEffect("WELCOME,_ADMIN", typewriterPlace, 40);