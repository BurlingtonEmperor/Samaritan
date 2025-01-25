const memoryUnitNameArray = ["newActionWordsMemory", "newArticleWordsMemory", "newAdjectiveWordsMemory", "newSubjectWordsMemory", "socialMediaSites", "assestSites", "resourceSites"];

function checkMemoryUnits (memoryUnit) {
  if (memoryUnit == null || memoryUnit == "" || memoryUnit == undefined) {
    return "no memory";
  }
  
  return "memory";
}
  
function commitToMemory (memoryUnit, overWrite, newUnit) {
  switch (overWrite) {
    default:
      return "abort";
    case 0:
      let oldArrayToAppend = JSON.parse(localStorage.getItem(memoryUnit + "-Samaritan"));
      oldArrayToAppend.push(newUnit);
      localStorage.setItem(memoryUnit + "-Samaritan", oldArrayToAppend);
      break;
    case 1:
      localStorage.setItem(memoryUnit + "-Samaritan", newUnit);
      break;
  }
}
  
for (let i = 0; i < memoryUnitNameArray.length; i++) {
  switch (checkMemoryUnits(localStorage.getItem(memoryUnitNameArray[i] + "-Samaritan"))) {
    case "no memory":
      break;
    case "memory":
      try {
        let parsedMemoryArray = JSON.parse(localStorage.getItem(memoryUnitNameArray[i] + "-Samaritan"));
  
        switch (i) {
          case 0:
            actionWords.concat(parsedMemoryArray);
            break;
          case 1:
            articleWords.concat(parsedMemoryArray);
            break;
          case 2:
            adjectiveWords.concat(parsedMemoryArray);
            break;
          case 3:
            subjectWords.concat(parsedMemoryArray);
            break;
        }
      }
      catch (error) {
        throw error;
      }
      break;
  }
}