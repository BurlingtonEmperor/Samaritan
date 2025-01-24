const searchEngineFilterList = ["support.google"]

function searchEngineFilter (searchArr) {
  let easySearchArr = searchArr;
  let markedForDeletion = 0;

  for (let i = 0; i < easySearchArr.length; i++) {
    for (let x = 0; x < searchEngineFilterList.length; x++) {
      if (easySearchArr[i].includes(searchEngineFilterList[x])) {
        markedForDeletion = 1;
      }
    }

    switch (markedForDeletion) {
      case 1:
        let storeLastItem = easySearchArr[easySearchArr.length - 1];
        let storeMarkedItem = easySearchArr[i];

        easySearchArr[i] = storeLastItem;
        easySearchArr[easySearchArr.length - 1] = storeMarkedItem;
        easySearchArr.pop();
        markedForDeletion = 0;
        break;
    }
  }

  return easySearchArr;
}