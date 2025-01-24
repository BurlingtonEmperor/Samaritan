function returnRandomNumber (maxNum, condition) {
    let isOne = 0;
    
    if (condition == true) {
      isOne = 1;
    }
  
    return (Math.floor(Math.random() * maxNum) + isOne);
  }
  
  let actionWords = ["find", "upload", "unplug"];
  let articleWords = ["the", "a", "an"];
  let adjectiveWords = ["new", "old", "damaged"];
  let subjectWords = ["battery", "wheel", "processor"];
  
  let vowelList = ["a", "e", "i", "o", "u"];
  
  function grammarCheckArticle (articleWord, nextWord) {
    switch (articleWord) {
      case "an":
        let firstLetterofNextWord = nextWord.charAt(0);
        let isCorrectNextLetter = 0;
  
        for (let i = 0; i < vowelList.length; i++) {
          if (firstLetterofNextWord.toLowerCase() == vowelList[i]) {
            isCorrectNextLetter = 1;
          }
        }
  
        switch (isCorrectNextLetter) {
          case 0:
            return 0;
        }
        break;
    }
  }
  
  function formNewSentence (action_type) {
    switch (action_type) {
      default:
        return "abort";
      case "random":
        let randActionWord = actionWords[returnRandomNumber(actionWords.length, false)];
        let randArticleWord = articleWords[returnRandomNumber(articleWords.length, false)];
        let randAdjectiveWord = adjectiveWords[returnRandomNumber(adjectiveWords.length, false)];
        let randSubjectWord = subjectWords[returnRandomNumber(subjectWords.length, false)];
  
        switch (grammarCheckArticle(randArticleWord, randAdjectiveWord)) {
          case 0:
            let tempStoreArticles = articleWords;
            tempStoreArticles.pop();
            randArticleWord = articleWords[returnRandomNumber(articleWords.length, false)];
            break;
        }
  
        return (randActionWord + " " + randArticleWord + " " + randAdjectiveWord + " " + randSubjectWord);
    }
  }
  
  alert(formNewSentence("random"));