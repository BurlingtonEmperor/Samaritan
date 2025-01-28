const samaritanVoice = document.getElementById("samaritan-voice");

function typeWriterEffect (typeWriterText, targetElement, textSpeed) {
  let i = 0;
  function typeWriterInternal () {
    switch (true) {
      case (i < typeWriterText.length):
        targetElement.innerText += typeWriterText.charAt(i);
        i++;
        setTimeout(typeWriterInternal, textSpeed);
        break;
    }
  }
  typeWriterInternal();
}