let x = document.querySelectorAll(".fw-bold");

let y = [];
for (let i = 0; i < x.length; i++) {
  if (x[i].innerHTML.includes(".00")) {
    // ignore
  }
  else {
    y.push(x[i].innerHTML);
  }
}

let el = document.createElement("html");

let z = [];
for (let i = 0; i < y.length; i++) {
  el.innerHTML = y[i];
  z.push(el.innerText);
}

let g = [];
for (let i = 0; i < z.length; i++) {
  g.push(parseInt(z[i].replace("\n", "")));
}

// get g
function download_txt() {
  const hiddenElement = document.createElement('a');
    
  hiddenElement.href = 'data:attachment/text,' + encodeURI(JSON.stringify(g));
  hiddenElement.target = '_blank';
  hiddenElement.download = 'myFile.txt';
  hiddenElement.click();
}
  
document.body.addEventListener('click', download_txt);