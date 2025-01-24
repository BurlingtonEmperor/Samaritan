let desiredInput = "";
let defaultToContigencies = 0;

class inputParsing {
  constructor (user_input, input_type) {
    this.user_input = user_input;
    this.input_type = input_type;
  }

  searchEngine () {
    let searchEngineSpaceReplace = this.user_input.replace(" ", "%20");

    fetch ("/get_search", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        url : "https://www.google.com/search?q=" + searchEngineSpaceReplace
      })
    })
    .then(response => response.text())
    .then(data => {
      const data_array = data.split("<a href=");
      const all_array = [];
      let turn = 0;

      // word_problems_answers.innerHTML = "";

      for (i = 0; i < data_array.length; i++) {
        if (data_array[i].includes("https://")) {
          const link_array = data_array[i].split('"');

          if (turn === 0) {
            // PASS 
            turn = turn + 1;
          }

          else {
            all_array.push(link_array[1]);
          }
        }
      }

      for (i = 0; i < all_array.length; i++) {
        // word_problems_answers.innerHTML = word_problems_answers.innerHTML + "<p class='glow-augment small-text'><a href='https://google.com" + all_array[i] + "' target='_blank'>" + all_array[i] + "</a></p>";
      }
    })
    .catch(error => {

    });
  }
}