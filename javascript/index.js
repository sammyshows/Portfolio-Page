const textLengthCleaner = () => {
  const textLengthEls = document.querySelectorAll('.text-length');
  textLengthEls.forEach(textLengthEl => {
    textLengthEl.setAttribute("style", "display: none;");
  });
}

const smallestText = (radioOne) => {
  textLengthCleaner();
}

const smallText = (radioTwo) => {
  textLengthCleaner();
  smallTextEls = document.querySelectorAll('.text-length-2');
  smallTextEls.forEach(textLengthEl => {
    textLengthEl.setAttribute("style", "display: inline;")
  });
}
