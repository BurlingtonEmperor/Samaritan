function checkIfTeamExists (teamNum) {
    fetch ("/get_search", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        url : "https://frc-events.firstinspires.org/team/" + String(teamNum)
      })
    })
    .then(response => response.text())
    .then(data => {
      switch (true) {
        case (data.includes("could not be found")):
          return "non-existant";
        default:
          return "exists";
      }
    })
    .catch(error => {
      return error;
    })
  }