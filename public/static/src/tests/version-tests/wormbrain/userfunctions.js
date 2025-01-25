let desiredInput = "";
let defaultToContigencies = 0;

class inputParsing {
  constructor (user_input) {
    this.user_input = user_input;
  }

  searchEngine () {
    console.log(this.user_input);
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
      console.log(data);
      
      const data_array = data.split("<a href=");
      const all_array = [];
      let turn = 0;

      let finalResultArray = [];

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
        let searchResultArray = [];

        searchResultArray.push("https://google.com" + all_array[i], all_array[i]);
        finalResultArray.push(searchResultArray);
      }
      
      setTimeout(function () {
        console.log(finalResultArray);
        return finalResultArray;
      }, 100);
    })
    .catch(error => {
      return "samaritan-error: " + error;
    });
  }
}