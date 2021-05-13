const arrowButtonScroll = () => {
  const arrowButton = document.querySelector('.arrow-button');
  const aboutPage = document.querySelector('.about-page');
  arrowButton.addEventListener('click', function() {
    window.scrollTo({
      top: aboutPage.offsetTop,
      behavior: 'smooth',
    });
  });
}

const textLengthCleaner = () => {
  const textLengthEls = document.querySelectorAll('.text-length');
  textLengthEls.forEach(textLengthEl => {
    textLengthEl.setAttribute("style", "display: none;");
  });
}

const shortestText = (radioOne) => {
  textLengthCleaner();
}

const shorterText = (radioTwo) => {
  textLengthCleaner();
  smallTextEls = document.querySelectorAll('.text-length-2');
  smallTextEls.forEach(textLengthEl => {
    textLengthEl.setAttribute("style", "display: inline;")
  });
}

const shortText = (radioThree) => {
  textLengthCleaner();
  smallTextEls = document.querySelectorAll('.text-length-3');
  smallTextEls.forEach(textLengthEl => {
    textLengthEl.setAttribute("style", "display: inline;")
  });
}

const longText = (radioFour) => {
  textLengthCleaner();
  smallTextEls = document.querySelectorAll('.text-length-4');
  smallTextEls.forEach(textLengthEl => {
    textLengthEl.setAttribute("style", "display: inline;")
  });
}

const longerText = (radioFive) => {
  textLengthCleaner();
  smallTextEls = document.querySelectorAll('.text-length-5');
  smallTextEls.forEach(textLengthEl => {
    textLengthEl.setAttribute("style", "display: inline;")
  });
}

const longestText = (radioSix) => {
  textLengthCleaner();
  smallTextEls = document.querySelectorAll('.text-length-6');
  smallTextEls.forEach(textLengthEl => {
    textLengthEl.setAttribute("style", "display: inline;")
  });
}
