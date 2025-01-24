function rankNumbers (numArray) {
  let easyNumArray = numArray;
  let rankingArray = [];
  
  if (easyNumArray.length < 2) {
    return "too little data";
  }
  
  for (let i = 0; i < easyNumArray.length; i++) {
    let x = findLargestNumber(easyNumArray);
  
    let swapStoreNum = easyNumArray[easyNumArray.length - 1];
    easyNumArray[easyNumArray.length - 1] = x[0];
    easyNumArray[x[1]] = swapStoreNum;
    rankingArray.push(x[0]);
    easyNumArray.pop();
  }
  
  return rankingArray;
}

rankNumbers([3, 5, 6, 7, 7, 8, 10]);
alert(rankNumbers([3, 5, 6, 7, 8, 9, 10]));