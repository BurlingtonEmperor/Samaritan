let largePointCounter = 3;
let smallPointCounter = 1;
let matchTime = 120; // seconds

function automateScouting (targetTeamPoints) {  // Basic principle (no match time accounted for);
  switch (true) {
    case (targetTeamPoints < smallPointCounter):
      return "liability";
  }
  
  // let x = 1;
  // let xPointsMultiplyer = x * smallPointCounter;
  let largePointDivSmall = Math.floor(largePointCounter / smallPointCounter);
  let largePointMultiplyer = (largePointCounter) * 2;
  let totalPointDivSmall = Math.floor(targetTeamPoints / smallPointCounter);
  let totalPointDivLarge = Math.floor(targetTeamPoints / largePointCounter);
  
//   switch (xPointsMultiplyer) {
//     case (targetTeamPoints):
//       return "small-point: 1," + largePointDivSmall; 
//   }

  switch (true) {
    case (targetTeamPoints > largePointMultiplyer):
      return "large-point: 1," + totalPointDivLarge;
    default:
      return "small-point: 1," + totalPointDivSmall;
  }
}

function timedMatchScout (targetTeamPoints) {
  let pointsPerSecond = targetTeamPoints / matchTime;
  
  return pointsPerSecond;
}