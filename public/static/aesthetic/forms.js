const commandInputForm = document.getElementById("command-input-form");
const commandOutput = document.getElementById("command-output");
const commandInput = document.getElementById("command-input");

commandInputForm.onsubmit = function (event) {
  event.preventDefault();

  commandOutput.innerHTML += "<p class='mid-text no-margin'>$userinput: " + commandInput.value.replace(/<[^>]*>?/gm, '') + "</p>";
  try {
    commandOutput.innerHTML += "<p class='mid-text no-margin'>" + eval(commandInput.value) + "</p>";
  }
  catch (error) {
    commandOutput.innerHTML += "<p class='mid-text no-margin'>" + error + "</p>";
  }
  commandInput.value = "";
  commandOutput.scrollTo(0, commandOutput.scrollHeight);
}