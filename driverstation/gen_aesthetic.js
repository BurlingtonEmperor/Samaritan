let typeWriterTime = 0;

async function typeWriterEffect (typeWriterText, targetElement, textSpeed) {
  typeWriterTime = textSpeed * typeWriterText.length;
  
  let i = 0;
  function typeWriterInternal () {
    switch (true) {
      case (i < typeWriterText.length):
        targetElement.innerText += typeWriterText.charAt(i);
        i++;
        setTimeout(typeWriterInternal, textSpeed);
        break;
      default:
        return "success";
    }
  }
  typeWriterInternal();
}

async function deType (targetElement) {
  let i = 0;
  function deTypeInternal () {
    switch (true) {
      case (i < (targetElement.innerText.length * 7)):
        targetElement.innerText = targetElement.innerText.slice(0, -1)
        i++;
        setTimeout(deTypeInternal, 40);
        break;
      default:
        targetElement.innerText = "";
        return "success";
    }
  }
  deTypeInternal();
}

async function actualType (textToType, targetElement, textSpeed) {
  await typeWriterEffect(textToType, targetElement, textSpeed);
  const checkTypeInterval = setInterval(async function () {
    if (targetElement.innerText.length == textToType.length) {
      clearInterval(checkTypeInterval);
      let timeIng = textSpeed * textToType.length * 3;
      setTimeout(async function () {
        await deType(targetElement);
      }, timeIng);
    }
  }, 500);
}