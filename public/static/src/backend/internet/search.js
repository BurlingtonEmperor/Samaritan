const searchProxy = new Proxy({ result : 0 }, { 
  set (target, prop, val) {
    target[prop] = val;
  }
});

function getSearch (searchText) {
  let linkData = [];

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