const artyom = new Artyom();

const commandTimer = {
  indexes: ["timer stop", "stop the timer", "stop timer"],
  action: function () { 
    stopTimer(); 
  }
};

const commandStartTimer = {
  indexes: ["start timer", "start the timer", "timer start", "resume timer", "resume the timer"],
  action: function () {
    resumeTimer();
  }
}

function beginVoiceControls () {
  artyom.addCommands(commandTimer);
  artyom.addCommands(commandStartTimer);

  artyom.initialize({
    lang: "en-GB",
    debug: true, 
    continuous: true;
    listen: true, 
    speed: 0.9, 
    mode: "normal" 
  });
}