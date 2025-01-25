const memoryUnitNameArray = ["newActionWordsMemory", "newArticleWordsMemory", "newAdjectiveWordsMemory", "newSubjectWordsMemory"];

// Default (using no memory)
let actionWords = ["find", "upload", "unplug"];
let articleWords = ["the", "a", "an"];
let adjectiveWords = ["new", "old", "damaged"];
let subjectWords = ["battery", "wheel", "processor"];

let vowelList = ["a", "e", "i", "o", "u"];
// End default

function checkMemoryUnits (memoryUnit) {
  if (memoryUnit == null || memoryUnit == "" || memoryUnit == undefined) {
    return "no memory";
  }

  return "memory";
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