const arrowButtonScroll = () => {
  const arrowButton = document.querySelector('.arrow-button');
  const aboutPage = document.querySelector('.about-page');
  arrowButton.addEventListener('click', function() {
    window.scrollTo({
      top: aboutPage.offsetTop + 30,
      behavior: 'smooth',
    });
  });
}

const aboutTitleScroll = () => {
  const navAbout = document.querySelector('#navbar-about-link');
  const aboutTitle = document.querySelector('#about-page-title');
  const aboutPage = document.querySelector('.about-page');
  aboutTitle.addEventListener('click', function() {
    window.scrollTo({
      top: aboutPage.offsetTop + 30,
      behavior: 'smooth',
    });
  });
  navAbout.addEventListener('click', function() {
    setTimeout(function () {
      window.scrollTo({
        top: aboutPage.offsetTop + 30,
        behavior: 'smooth',
      });
    },2);
  });
}

const projectsTitleScroll = () => {
  const navProject = document.querySelector('#navbar-project-link');
  const projectsTitle = document.querySelector('#projects-page-title');
  const projectPage = document.querySelector('.project-page');
  projectsTitle.addEventListener('click', function() {
    window.scrollTo({
      top: projectPage.offsetTop,
      behavior: 'smooth',
    });
  });
  navProject.addEventListener('click', function() {
    setTimeout(function () {
      window.scrollTo({
        top: projectPage.offsetTop,
        behavior: 'smooth',
      });
    },2);
  });
}

const contactTitleScroll = () => {
  const navContact = document.querySelector('#navbar-contact-link');
  const contactTitle = document.querySelector('#contact-page-title');
  const contactPage = document.querySelector('.contact-page');
  contactTitle.addEventListener('click', function() {
    window.scrollTo({
      top: contactPage.offsetTop,
      behavior: 'smooth',
    });
  });
  navContact.addEventListener('click', function() {
    setTimeout(function () {
      window.scrollTo({
        top: contactPage.offsetTop,
        behavior: 'smooth',
      });
    },2);
  });
}

const homePageScroll = () => {
  const brandImage = document.querySelector('.brand-image');
  const welcomePage = document.querySelector('.welcome-page');
  brandImage.addEventListener('click', function() {
    window.scrollTo({
      top: welcomePage.offsetTop,
      behavior: 'smooth',
    });
  });
}


const textLengthCleaner = () => {
  const textLengthEls = document.querySelectorAll('.text-length');
  textLengthEls.forEach(textLengthEl => {
    textLengthEl.style.display = "none";
  });
}

const shortestText = (radioOne) => {
  textLengthCleaner();
}

const shorterText = (radioTwo) => {
  textLengthCleaner();
  smallTextEls = document.querySelectorAll('.text-length-2');
  smallTextEls.forEach(textLengthEl => {
    textLengthEl.style.display = "inline";
  });
}

const shortText = (radioThree) => {
  textLengthCleaner();
  smallTextEls = document.querySelectorAll('.text-length-3');
  smallTextEls.forEach(textLengthEl => {
    textLengthEl.style.display = "inline";
  });
}

const longText = (radioFour) => {
  textLengthCleaner();
  smallTextEls = document.querySelectorAll('.text-length-4');
  smallTextEls.forEach(textLengthEl => {
    textLengthEl.style.display = "inline";
  });
}

const longerText = (radioFive) => {
  textLengthCleaner();
  smallTextEls = document.querySelectorAll('.text-length-5');
  smallTextEls.forEach(textLengthEl => {
    textLengthEl.style.display = "inline";
  });
}

const longestText = (radioSix) => {
  textLengthCleaner();
  smallTextEls = document.querySelectorAll('.text-length-6');
  smallTextEls.forEach(textLengthEl => {
    textLengthEl.style.display = "inline";
  });
}
