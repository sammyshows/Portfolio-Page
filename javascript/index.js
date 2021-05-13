const textLengthCleaner = () => {
  const textLengthEls = document.querySelectorAll('.text-length');
  textLengthEls.forEach(textLengthEl => {
    textLengthEl.setAttribute("style", "display: none;");
  });
}

const smallestText = (radioOne) => {
  textLengthCleaner();
}
