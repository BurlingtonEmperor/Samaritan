console.stdlog = console.log.bind(console);
console.logs = [];
console.log = function(){
  console.logs.push(Array.from(arguments));
  console.stdlog.apply(console, arguments);
  alert(console.logs[console.logs.length - 1]);
}

let commandList = `
HELP - brings up the command list
RUNSCRIPT - runs JavaScript code
`;

function runScript () {
  let userScript = prompt("Script: ");

  try {
    eval(userScript);
  }
  catch (error) {
    alert(error);
  }
}

while (true) {
  let consoleInput = prompt("Type HELP for a list of commands: ");

  switch (consoleInput.toLowerCase()) {
    default:
      alert("not a valid command");
      break;
    case "help":
      alert(commandList);
      break;
    case "runscript":
      runScript();
      break;
  }
}