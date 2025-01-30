const simBut = document.getElementById("simBut");
const mostUsed = document.getElementById("most-used");

let wordArr = [["sim", 0], ["rel", 0], ["strat", 0]];

function useSuggestions (word) {
  addWordCount(word);
  mostUsed.innerText = suggestWords(wordArr);
}

simBut.onclick = function () {
  useSuggestions("sim");
  let x = prompt
}