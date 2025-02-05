const searchProxy = new Proxy({ result : [""] }, { 
  set (target, prop, val) {
    target[prop] = val;
  }
});

function getSearch (searchText) {
  let linkData = [];
  console.log(searchText);

  fetch ("/scrape_search", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({
      text : searchText
    })
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let {title, links, snippet, displayedLink} = data[i];
      linkData.push(links);
    }

    searchProxy.result = linkData;
  })
  .catch(error => {
    throw error;
  });
}