const randomLines = ["archiving primary asset", "loading kernel database 3.0 2", "x86 webassembly ironman html", "display total chipotle now please 3009", "hal 9000 terminator version 2", "loading kernel from source 9000#%^7", "gibberish trash trs80 ^^&&231", "mehran is a dumb bop who aspires to be ^&^%$#@", "2876 best team confirm", "ap lit is painful until the end load end aloc MEMORY FRANKENSTEIN color palette set red bg black now WEB www W3#$% ALONE code VARIABLE set 90)) CALLBACK ERR", "WONDEE# (333$$% obfuscate model data pytorch"];
const consoleAesthetic = document.getElementById("console-aesthetic");
const relevantData = document.getElementById("relevant-data");

const relTeam = document.getElementById("rel-team");
const matchTime = document.getElementById("match-time");

const samStat = new newSamaritanStrategy([1, 2, 3], larry, 2876);
samStat.preloadModel();

function addConsole (text) {
  consoleAesthetic.innerHTML += "<p>" + text + "</p>";
}

let timeStartForMatch;
totalMatchTime = samStat.getMatchTime();
function startTimer () {
  timeStartForMatch = setInterval(function () {
    matchTime.innerText = totalMatchTime + "s";
    totalMatchTime -= 1;

    if (totalMatchTime < 1) {
      clearInterval(timeStartForMatch);
      matchTime.innerText = "0s -- DONE";
    }
  }, 1000);
}

function customTimer (time) {
  let customTime = time;
  timeStartForMatch = setInterval(function () {
    matchTime.innerText = customTime + "s";
    customTime -= 1;

    if (customTime < 1) {
      clearInterval(timeStartForMatch);
      matchTime.innerText = "0s -- DONE";
    }
  }, 1000)
}

function stopTimer () {
//   const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
//   for (let i = 1; i < interval_id; i++) {
//     window.clearInterval(i);
//   }

  clearInterval(timeStartForMatch);
}

function resumeTimer () {
  let currentTime = matchTime.innerText.replace("s", "");
  let currentParsedTime = parseInt(currentTime);

  customTimer(currentParsedTime);
}

setTimeout(function () {
  const aestheticInterval = setInterval(function () {
    let randomLineNum = Math.floor(Math.random() * randomLines.length);
    addConsole(randomLines[randomLineNum]);
  }, 30);

  setTimeout(function () {
    clearInterval(aestheticInterval);
    consoleAesthetic.style.display = "none";

    setTimeout(function () {
      relevantData.style.display = "block";
      relTeam.innerText = samStat.getMostRelevant();
      startTimer();
      beginVoiceControls();
    }, 1000);
  }, 1000);
}, 1000);