let desiredInput = "";

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
    .then(data => {})
    .catch()
  }
}