<template>
  <div ref="homePage" id="portfolio">
    <nav id="navbar" class="navbar navbar-light">
      <div @click="scrollTo('homePage')" class="brand-image" style="cursor: pointer;">
        <img src="./assets/images/sam_brand.png" alt="">
      </div>
      <div class="navbar-nav">
        <a v-for="navLink in navLinks" @click="scrollTo(navLink.element)" class="nav-item nav-link r-link animated-underline animated-underline_type4" style="cursor: pointer; font-weight: 300; color:#A1C8FF;">{{ navLink.name }}</a>
        <a class="nav-item nav-link" id="navbar-resume-link" style="font-weight: 300; color: white; border: 1px #A1C8FF solid; padding-left: 20px; padding-right: 20px; transition: 0.3s; border-radius: 4px;" :href="`${publicPath}sam-mccarthy-software-engineer.pdf`" target="_blank" download>Resume</a>
      </div>
    </nav>

    <div class="icon-links-fixed">
      <ul class="icon-links">
        <li><a href="https://github.com/sammyshows" target="_blank"><span class="iconify" data-icon="codicon:github-alt" data-inline="false"></span></a></li>
        <li><a href="https://www.linkedin.com/in/sam-mccarthy-dev/" target="_blank"><span class="iconify" data-icon="eva:linkedin-outline" data-inline="false"></span></a></li>
        <li><a href="https://www.instagram.com/_sam_mccarthy/" target="_blank"><span class="iconify" data-icon="akar-icons:instagram-fill" data-inline="false"></span></a></li>
      </ul>
    </div>

    <div class="email-fixed">
      <a href="mailto: samrmccarthy6@gmail.com"><p>samrmccarthy6@gmail.com</p></a>
    </div>


    <div class="welcome-page">
      <div class="welcome-container">
        <p class="welcome-first">G'day, my name is</p>
        <h2 class="r-link animated-underline animated-underline_type5 welcome-name">Sam McCarthy.</h2>
        <h3 class="welcome-quote">I love to build things on the web.</h3>
        <div class="welcome-intro">
          <p class="r-link animated-underline animated-underline_type4">I'm a Melbourne based software engineer focused on building modern and unique digital experiences. I work with both the front-end and back-end and have recently released Stockwise: currently available for free on the Google Play Store.</p>
        </div>
      </div>
      <section id="section07" class="demo">
        <a href="#section08"><span></span><span></span><span></span></a>
      </section>
      <div @click="scrollTo('aboutPage')" class="arrow-button"></div>
    </div>



    <div ref="aboutPage" class="about-page">
      <div class="about-container">
        <div class="page-title">
          <h1 @click="scrollTo('aboutPage')" id="about-page-title" style="font-weight: 100;">About</h1>
        </div>
        <div class="about-content">
          <div class="about-text-content">
            <div class="about-text-form-section">
              <h5 style="color: #A1C8FF; font-size: 15px;">Adjust bio length:</h5>
              <div class="about-text-form">
                <div v-for="(index) in 6">
                  <input style="cursor: pointer;" class="form-check-input" type="radio" name="radio" @click="setBioLength(index)" :checked="bioLength === index">
                </div>
              </div>
              <div class="text-size-options">
                <h5 style="color: #A1C8FF; font-size: 15px;">Shortest</h5>
                <h5 style="color: #A1C8FF; font-size: 15px;">Longest</h5>
              </div>
            </div>
            <div class="about-text">
              <strong style="font-weight: 700; color: #A1C8FF;">Sam McCarthy</strong> is
              <span v-if="bioLength > 1"> a software engineer<span v-show="bioLength === 2">,</span>
                <span v-show="bioLength === 2"> a tech enthusiast, the absolute <span style="color: #A1C8FF;"><strong>grooviest</strong></span>, and</span>
                <span v-show="bioLength > 2"> specialised in building <span v-show="bioLength === 4 || bioLength === 6" style="color: #A1C8FF;"><strong>exceptional</strong></span><span v-show="bioLength === 3 || bioLength === 5">exceptional</span> digital experiences. </span>
                <span v-show="bioLength > 3">What drives Sam is a passion for tech, excitement for growth and the <span v-show="bioLength > 4" style="color: #A1C8FF;"><strong>motivation</strong></span><span v-show="bioLength === 4">motivation</span> to excel.</span>
                <span v-show="bioLength > 2"> He loves to spend his time coding and <span v-show="bioLength === 3 || bioLength === 6" style="color: #A1C8FF;"><strong>collaborating</strong></span><span v-show="bioLength === 4 || bioLength === 5">collaborating</span> with great people<span>, but </span></span>
                <span v-show="bioLength < 4 || bioLength === 5"> ultimately <span v-show="bioLength > 2">Sam</span> <span v-show="bioLength > 2">is</span> </span>
                <span v-show="bioLength === 4 || bioLength === 6"> at the end of the day Sam is</span>
              </span>
              a problem solver at heart.
              <span v-show="bioLength > 4"> If you ask Sam what made him into who he is today, he will tell you</span>
              <span v-show="bioLength === 5"> it all starts with good habits.</span>
              <span v-show="bioLength === 6"> it all starts with good habits,</span>
              <span v-show="bioLength === 6"> ambition and, most importantly, a good system for being the best version of <span style="color: #A1C8FF;"><strong>YOU</strong></span> everyday.</span>
            </div>
            <div class="skills-text">
              <p style="font-size: 12px; font-weight: 700; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);">
                <span v-for="skill in skills"><span class="r-link animated-underline animated-underline_type4">{{ skill }}</span>&nbsp;&nbsp;· &nbsp;&nbsp;</span>
                <span class="r-link animated-underline animated-underline_type4">SQLite</span>
              </p>
            </div>
          </div>
          <div class="about-image-content">
            <img class="about-image-content" src="./assets/images/sam_close_up.jpg" alt="sam mccarthy close up">
            <div class="about-image-overlay"></div>
            <div class="about-image-border"></div>
          </div>
        </div>
      </div>
    </div>

    <div ref="experiencePage" class="experience-page">
      <div class="page-title experience-title">
        <h1 @click="scrollTo('experiencePage')" style="font-weight: 100;">Experience</h1>
      </div>

      <div class="project-card experience-card experience-card-left">
        <div>
          <a href="https://stockwise.app/portfolios" target="_blank">
            <img class="experience-logo" src="./assets/images/stockwise.png" alt="Stockwise logo">
          </a>
        </div>

        <div class="project-text" style="z-index: 2">
          <div class="experience-text-left">
            <p style="font-size: 13px; margin: 0; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);">Following a surge in new stock market investors in 2020, I identified a need for greater education and tools for studying businesses.
              <br><br>This led to the birth of <a href="https://stockwise.app/portfolios" style="color: #A1C8FF;" target="_blank">Stockwise</a>: a mobile-first application enabling users to study companies, track their stock, currency and cash investments, and see deep insights into companies.</p>
          </div>
          <div class="experience-skills-left" style="margin-bottom: 20px;">
            <p style="font-size: 12px; font-weight: 700; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);" class="r-link" v-for="skill in ['Nuxt3', 'Vue3', 'Node.js', 'TypeScript', 'PostgreSQL', 'TailwindCSS', 'SSR', 'PWA', 'Heroku CRON', 'Netlify Hosting', 'AWS Lambda Functions']"><span class="animated-underline animated-underline_type4">{{ skill }}</span> &nbsp;&nbsp;· &nbsp;&nbsp;</p><p style="font-size: 12px; font-weight: 700; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);" class="r-link"><span class="animated-underline animated-underline_type4">Figma</span></p>
          </div>
          <p class="experience-period-left" style="font-size: 12px; font-weight: 100;">Mar 2022 - Present</p>
          <h2 class="experience-title-left" style="font-size: 45px; font-weight: 100; border-bottom: 3px #A1C8FF solid;"><a href="https://stockwise.app/portfolios" style="color: white; text-decoration: none;" target="_blank">Stockwise</a></h2>
        </div>
        <div class="experience-links">
          <a href="https://github.com/sammyshows/stockwise" target="_blank"><span class="iconify" data-icon="ant-design:github-filled" data-inline="false"></span></a>
          <a href="https://stockwise.app/portfolios" target="_blank"><span class="iconify" data-icon="feather:external-link" data-inline="false"></span></a>
        </div>
      </div>

      <div style="width: 100%; display: flex; justify-content: center; margin-top: 30px;">
        <img class="stockwise-image" src="./assets/images/stockwise-feature.png" alt="Stockwise logo">
      </div>

      <div class="project-card experience-card experience-card-right" style="margin-top: 50px;">
        <div class="experience-links">
          <a href="https://github.com/spotpass" target="_blank"><span class="iconify" data-icon="ant-design:github-filled" data-inline="false"></span></a>
          <a href="https://spotpass.com/" target="_blank"><span class="iconify" data-icon="feather:external-link" data-inline="false"></span></a>
        </div>

        <div class="project-text" style="z-index: 2">
          <div class="experience-text-right">
            <p style="font-size: 13px; margin: 0; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);"><a href="https://spotpass.com/" style="color: #A1C8FF;" target="_blank">Spotpass</a>
              is a micropayment system designed to allow everyone to get instant access to their favourite content for 99c or less.<br><br>
              Being the sole Front End Developer at Spotpass, I was required to build applications from the ground up including our internal admin portal and producer portal. I would also add new features to and maintain our consumer flow.</p>
          </div>
          <div class="experience-skills-right">
            <p style="font-size: 12px; font-weight: 700; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);"><span class="r-link animated-underline animated-underline_type4">Vue3</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">TypeScript</span>  &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">GraphQL</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">TailwindCSS</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Single-spa</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Scrum</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Netlify</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Browserstack</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Figma</span></p>
          </div>
          <p class="experience-period-right" style="font-size: 12px; font-weight: 100;">Jun 2021 - Mar 2022</p>
          <h2 class="experience-title-right" style="font-size: 45px; font-weight: 100; border-bottom: 3px #A1C8FF solid;"><a href="https://spotpass.com/" style="color: white; text-decoration: none;" target="_blank">Spotpass</a></h2>
        </div>

        <div>
          <a href="https://spotpass.com/" target="_blank">
            <img class="experience-logo" src="./assets/images/spotpass.svg" alt="Spotpass button">
          </a>
        </div>
      </div>
    </div>

    <div ref="projectPage" class="project-page">
      <div class="project-container">
        <div class="page-title" style="margin-top: 5vh;">
          <h1 @click="scrollTo('projectPage')" style="font-weight: 100;">Projects</h1>
        </div>
        <div class="project-cards">
          <div class="project-card project-card-left">
            <div class="project-image-content">
              <img src="./assets/images/togather-1.png" alt="">
              <div class="project-image-overlay"></div>
            </div>
            <div class="project-text" style="z-index: 2">
              <div class="project-text-left">
                <p style="font-size: 13px; margin: 0; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);"><span style="color: #A1C8FF;">ToGather</span> is a platform that allows groups and couples to easily plan activities together by consolidating activities, times and location all in one spot. </p>
              </div>
              <div class="project-skills-left">
                <p style="font-size: 12px; font-weight: 700; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);"><span class="r-link animated-underline animated-underline_type4">Ruby</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Ruby on Rails</span>  &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">JavaScript</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">DOM</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Meetup API</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">PostgreSQL</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Figma</span></p>
              </div>
              <h2 class="project-title-left" style="font-size: 45px; font-weight: 100; border-bottom: 3px #A1C8FF solid;">ToGather</h2>
            </div>
            <div class="project-links">
              <a href="https://github.com/Shivika-S/ToGather" target="_blank"><span class="iconify" data-icon="ant-design:github-filled" data-inline="false"></span></a>
            </div>
          </div>

          <div class="project-card project-card-right">
            <div class="project-links">
              <a href="https://github.com/sammyshows/air_door" target="_blank"><span class="iconify" data-icon="ant-design:github-filled" data-inline="false"></span></a>
              <a href="https://airdoor.herokuapp.com/" target="_blank"><span class="iconify" data-icon="feather:external-link" data-inline="false"></span></a>
            </div>
            <div class="project-text">
              <div class="project-text-right">
                <p style="font-size: 13px; margin: 0; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);"><a href="https://airdoor.herokuapp.com/" style="color: #A1C8FF;" target="_blank">AirDoor</a> is an app that lets you book your next getaway anywhere in the world and lets you find your next visitor.</p>
              </div>
              <div class="project-skills-right">
                <p style="font-size: 12px; font-weight: 700; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);"><span class="r-link animated-underline animated-underline_type4">Ruby</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Ruby on Rails</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Mapbox API</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Cloudinary</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">PostgreSQL</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Figma</span></p>
              </div>
              <h2 class="project-title-right" style="font-size: 45px; font-weight: 100; border-bottom: 3px #A1C8FF solid;"><a href="https://airdoor.herokuapp.com/" style="color: white; text-decoration: none;" target="_blank">AirDoor</a></h2>
            </div>
            <div class="project-image-content">
              <img src="./assets/images/airdoor-1.png" alt="">
              <a href="https://airdoor.herokuapp.com/" target="_blank"><div class="project-image-overlay"></div></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div ref="contactPage" class="contact-page">
      <div class="contact-container">
        <div class="page-title">
          <h1 @click="scrollTo('contactPage')" id="contact-page-title" style="font-weight: 100">Say G'Day!</h1>
        </div>
        <div class="contact-text">
          <p style="text-shadow: 1px 1px 3px rgba(0,0,0,0.2);">I'm currently interested in new opportunities. I'm always keen to have a chat - whether you have a question or want to grab a coffee, please feel free to reach out!</p>
        </div>
        <a href="mailto: samrmccarthy6@gmail.com"><button class="contact-button">Say Hello</button></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (prevScrollpos > currentScrollPos || currentScrollPos < 30) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-15vh";
    }
    if (currentScrollPos < 30) {
      navbar.style.boxShadow = "none";
      navbar.style.background = "none";
      if (window.screen.width < 1000) {
        navbar.style.height = "8vh";
      } else {
        navbar.style.height = "14vh";
      }
    } else {
      navbar.style.boxShadow = "0 0 15px rgba(0,0,0,0.35)";
      navbar.style.background = "rgba(12, 26, 45, 0.7)";
      navbar.style.height = window.screen.width < 1000 ? "8vh" : "10vh"
    }
  }
  prevScrollpos = currentScrollPos;
}

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Portfolio Two',

  setup() {
    const aboutPage = ref()
    const experiencePage = ref()
    const projectPage = ref()
    const contactPage = ref()
    const homePage = ref()

    return { aboutPage, experiencePage, projectPage, contactPage, homePage }
  },

  data() {
    return {
      publicPath: process.env.BASE_URL,
      bioLength : 3,
      navLinks: [
        { element: 'aboutPage', name: 'About' },
        { element: 'experiencePage', name: 'Experience' },
        { element: 'projectPage', name: 'Projects' },
        { element: 'contactPage', name: 'Contact' }
      ],
      skills: [ 'Vue3', 'Node.js', 'JavaScript', 'TypeScript', 'PostgreSQL', 'GraphQL', 'REST APIs', 'Ruby', 'Ruby on Rails', 'TailwindCSS', 'PWA', 'CRON', 'AWS Lambda Functions', 'Single-spa', 'DOM Manipulation', 'Agile Methodologies', 'Wireframes', 'Netlify', 'Browserstack', 'Figma', 'HTML5', 'CSS3', 'Git', 'GitHib', 'Bootstrap' ]
    }
  },

  methods: {
    scrollTo(element: string) {
      window.scrollTo({
        top: this[element].offsetTop,
        behavior: 'smooth',
      })
    },

    setBioLength(bioLength: number) {
      this.bioLength = bioLength
      console.log(this.bioLength)
    }
  }
});
</script>

<style>
  #portfolio {
    background: #0A192E;
    font-family: 'Raleway', sans-serif;
  }
  p {
    color: white;
    font-family: 'Raleway', sans-serif;
    line-height: 1.5;
  }

  h1 {
    color: white;
    font-family: 'Raleway', sans-serif;
  }

  h2 {
    color: white;
    font-family: 'Raleway', sans-serif;
  }

  h3 {
    color: white;
    font-family: 'Raleway', sans-serif;
  }

  h5 {
    color: white;
    font-family: 'Raleway', sans-serif;
  }

  input[type='radio'] {
    transform: scale(1.5);
  }

  input[type='radio']:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #aaaaaa;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }

  input[type='radio']:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #4448FF;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }

  .arrow-button {
    position: absolute;
    bottom: 30px;
    left: 48.5%;
    height: 70px;
    width: 48px;
  }

  .arrow-button:hover {
    cursor: pointer;
  }

  #section07 a {
    padding-top: 80px;
  }
  #section07 a span {
    position: absolute;
    bottom: 48px;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb07 2s infinite;
    animation: sdb07 2s infinite;
    opacity: 0;
    box-sizing: border-box;
  }
  #section07 a span:nth-of-type(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    border-left: 1px solid #A1C8FF;
    border-bottom: 1px solid #A1C8FF;
  }
  #section07 a span:nth-of-type(2) {
    bottom: 64px;
    -webkit-animation-delay: .15s;
    animation-delay: .15s;
    border-left: 1px solid #A1C8FF;
    border-bottom: 1px solid #A1C8FF;

  }
  #section07 a span:nth-of-type(3) {
    bottom: 80px;
    -webkit-animation-delay: .3s;
    animation-delay: .3s;
    border-left: 1px solid #A1C8FF;
    border-bottom: 1px solid #A1C8FF;
  }
  @-webkit-keyframes sdb07 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sdb07 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .contact-button {
    padding: 10px 30px;
    border-radius: 4px;
    border: none;
    color: white;
    border: 1px #A1C8FF solid;
    background: #0A192E;
    transition: 0.3s;
    cursor: pointer;
    margin-top: 5vh;
    box-shadow: 0 0 15px rgba(0,0,0,0.35);
  }

  .contact-button:hover {
    background: #A1C8FF;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 10;
    transition: 0.7s;
    background: rgba(10, 25, 47, 0.8);
    backdrop-filter: blur(5px);
  }


  .navbar-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
  }

  .navbar-nav .nav-link {
    margin-right: 4vw;
  }

  .brand-image {
    height: 100%;
    display: flex;
    align-items: flex-end;
  }

  .brand-image img {
    height: 85%;
  }

  #navbar-resume-link:hover {
    background: #A1C8FF;
  }

  @media only screen and (min-device-width : 1000px) and (max-device-width : 2240px) {
    .navbar {
      height: 14vh;
    }

    .nav-item {
      font-size: 1rem;
    }
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 1000px) {
    .navbar {
      height: 8vh;
      padding: 10px 10px 10px 0;
    }

    .nav-item {
      font-size: 8px;
    }

    .nav-link {
      margin-right: 10px !important;
    }
  }

  .page-index h1 {
    color: #A1C8FF;
    font-size: 40px;
  }

  .page-title {
    display: flex;
    justify-content: center;
    margin: 5vh 0;
    z-index: 2;
    width: 100%;
  }

  .page-title h1 {
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
    white-space: nowrap;
  }

  .page-title h1:hover {
    cursor: pointer;
  }

  .page-title::before {
    content: "";
    display: block;
    position: relative;
    top: 3vh;
    width: 300px;
    height: 1px;
    margin-right: 20px;
    background-color: #A1C8FF;
  }

  .page-title::after {
    content: "";
    display: block;
    position: relative;
    top: 3vh;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: #A1C8FF;
  }

  .icon-links-fixed {
    position: fixed;
    left: 5vw;
    bottom: 0vh;
    z-index: 10;
  }

  .icon-links {
    height: 23vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style-type: none;
  }

  .icon-links-fixed::after {
    content: "";
    display: block;
    position: relative;
    right: -4.1vw;
    height: 15vh;
    width: 1px;
    background-color: #A1C8FF;
  }

  .email-fixed p {
    position: fixed;
    right: 5vw;
    bottom: 16vh;
    writing-mode: vertical-lr;
    z-index: 10;
    transition: 0.3s;
  }

  .email-fixed p:hover {
    text-shadow: 0.5px 0.5px white;
  }

  .email-fixed p::after {
    content: "";
    display: block;
    position: relative;
    bottom: -235px;
    right: 0.9vw;
    height: 15vh;
    width: 1px;
    background-color: #A1C8FF;
  }

  .welcome-page {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0a192f;
  }

  .welcome-container {
    height: 50vh;
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .welcome-first {
    font-size: 2.5vh;
    margin-bottom: 10px;
    color: #A1C8FF;
  }

  .welcome-name {
    margin: 0;
    font-size: 10vh;
    font-weight: 100;
  }

  .welcome-quote {
    font-size: 8vh;
    font-weight: 100;
    margin: 10px 0;
    cursor: default;
  }

  .welcome-intro {
    width: 50%;
    margin-top: 20px;
  }

  .about-page {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -5vh;
    background: #0a192f;
  }

  .about-container {
    width: 65vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .about-content {
    margin-top: 3vh;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-text-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-left: -8vw;
  }

  .about-text-form-section {
    width: 35%;
  }

  .about-text-form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3vh;
    margin-left: 7%;
  }

  .text-size-options {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 5vh;
    margin-bottom: 3.5vh;
  }

  .about-text {
    position: relative;
    height: 36vh;
    max-height: 50vh;
    width: 70%;
    font-size: 17px;
    font-weight: 400;
    color: white;
    overflow: hidden;
    text-align: justify;
  }

  .skills-text {
    width: 70%;
  }

  .skills-text p {
    text-align: justify;
  }

  .about-image-content {
    position: relative;
    height: 40vh;
  }

  .about-image-content img {
    height: 100%;
    border-radius: 4px;
    z-index: 1;
  }

  .about-image-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #A1C8FF;
    opacity: 0.3;
    transition: all 0.9s ease;
    z-index: 2;
  }

  .about-image-border {
    position: absolute;
    top: 10%;
    left: 10%;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    border: 3px #A1C8FF solid;
  }

  .experience-page {
    width: 65%;
    margin: 0 auto;
    padding-top: 5vh;
  }

  .stockwise-image {
    width: 60%;
    border-radius: 4%;
  }

  .project-page {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0a192f;
  }

  .project-container {
    width: 65%;
  }

  .project-card {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 8.5vh;
    display: flex;
    align-items: center;
  }

  .project-image-content {
    position: relative;
    box-shadow: 0 0 15px rgba(0,0,0,0.35);
  }

  .project-image-content img {
    width: 76vh;
    height: 38vh;
    object-fit: cover;
    border-radius: 4px;
  }

  .experience-logo {
    object-fit: contain;
    width: 15vw;
  }

  .project-image-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #A1C8FF;
    opacity: 0.5;
    transition: all 0.9s ease;
  }

  .project-image-overlay:hover {
    opacity: 0;
  }

  .project-image-overlay {
    font-size: 30px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  }

  .experience-card {
    height: 40vh;
    width: 100%;
    margin-bottom: 0px;
    display: flex;
    justify-content: space-around;
  }

  .project-card-left {
    height: 40vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .project-card-right {
    height: 40vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .project-text {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .experience-text-left {
    margin-left: 30px;
    background-color: #0b0c5d;
    width: 35vw;
    height: auto;
    padding: 20px 30px 20px 50px;
    border-radius: 4px;
    z-index: 2;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0,0,0,0.35);
  }

  .experience-text-right {
    margin-right: 30px;
    background-color: #0b0c5d;
    width: 35vw;
    height: auto;
    padding: 20px 50px 20px 30px;
    border-radius: 4px;
    z-index: 2;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0,0,0,0.35);
  }

  .project-text-left {
    margin-left: -9vw;
    background-color: #0b0c5d;
    width: 28vw;
    height: auto;
    max-height: 16vh;
    padding: 20px 30px 20px 50px;
    border-radius: 4px;
    z-index: 2;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0,0,0,0.35);
  }

  .project-text-right {
    margin-right: -9vw;
    background-color: #0b0c5d;
    width: 28vw;
    height: auto;
    max-height: 16vh;
    padding: 20px 50px 20px 30px;
    border-radius: 4px;
    z-index: 2;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0,0,0,0.35);
  }

  .experience-links {
    height: 40%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .project-links {
    height: 40%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .iconify {
    height: 5vh;
    width: 5vh;
    color: #A1C8FF;
    transition: 0.3s;
  }

  .iconify:hover {
    color: #4448FF;
  }

  .experience-skills-left {
    position: absolute;
    width: 100%;
    min-width: 100%;
    bottom: -20px;
    right: -4vh;
    text-align: end;
  }

  .experience-skills-right {
    position: absolute;
    width: 100%;
    min-width: 100%;
    bottom: -20px;
    left: -4vh;
    text-align: end;
  }

  .project-skills-left {
    position: absolute;
    width: 100%;
    min-width: 100%;
    bottom: 2vh;
    right: -4vh;
    text-align: end;
  }

  .project-skills-right {
    position: absolute;
    width: 100%;
    min-width: 100%;
    bottom: 2vh;
    left: -4vh;
    text-align: start;
  }

  .experience-title {
    margin-top: 0;
  }

  .experience-title-left {
    position: absolute;
    top: -25px;
    right: -4vh;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  }

  .experience-title-right {
    position: absolute;
    top: -25px;
    left: -4vh;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  }

  .experience-card {
    height: 40vh;
    width: 100%;
    margin-bottom: 0px;
    display: flex;
    justify-content: space-around;
  }

  .experience-period-left {
    position: absolute;
    top: 17px;
    right: 31vh;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  }

  .experience-period-right {
    position: absolute;
    top: 17px;
    left: 28vh;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  }

  .project-title-left {
    position: absolute;
    top: 2vh;
    right: -4vh;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  }

  .project-title-right {
    position: absolute;
    top: 2vh;
    left: -4vh;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  }

  .contact-page {
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0a192f;
  }

  .contact-container {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
  }

  .contact-text {
    width: 50%;
    font-size: 20px;
    text-align: center;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 1000px) {
    .icon-links-fixed {
      visibility: hidden;
    }

    .email-fixed {
      visibility: hidden;
    }

    .page-title {
      width: 130%;
    }

    .experience-title {
      width: 84.5vw;
    }

    .welcome-page {
      height: 95vh;
    }

    .welcome-first {
      font-size: 17px;
      margin-bottom: 10px;
      color: #A1C8FF;
    }

    .welcome-name {
      font-size: 33px;
      font-weight: 100;
    }

    .welcome-quote {
      font-size: 27px;
      font-weight: 100;
      margin-top: 10px;
    }

    .welcome-intro {
      width: 80%;
      margin-top: 10px;
      font-size: 15px;
    }

    .about-content {
      flex-direction: column-reverse;
    }

    .about-text-content {
      margin-left: 0;
      margin-top: 10vh;
    }

    .about-text {
      font-size: 12px;
      width: 70vw;
      height: 30vh
    }

    .skills-text {
      width: 70vw;
      margin-top: 20px;
    }

    .about-text-form-section {
      width: 80%;
      margin-left: 8vw;
    }

    .about-text-form-section h5 {
      margin-left: -10px;
    }

    .about-image-content {
      height: 30vh;
    }

    .project-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .project-text {
      height: auto;
    }

    .project-card {
      margin: 2vh 0 6vh 0;
    }

    .nba-project-card {
      margin-bottom: 2vh;
    }

    .experience-page {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 65%;
      margin: 0 auto;
    }

    .experience-logo {
      width: 30vw;
    }

    .experience-links {
      flex-direction: row;
    }

    .experience-card {
      margin-top: 60px;
      margin-bottom: 90px;
    }

    .experience-card-left {
      flex-direction: column;
    }

    .experience-card-right {
      flex-direction: column-reverse;
    }

    .experience-text-left {
      width: 100%;
      margin: 20px 0;
      padding: 10px;
    }

    .experience-text-right {
      width: 100%;
      margin: 20px 0;
      padding: 10px;
    }

    .experience-skills-left {
      position: unset;
      text-align: center;
    }

    .experience-skills-right {
      position: unset;
      text-align: center;
    }

    .experience-title-left {
      display: none;
    }

    .experience-title-right {
      display: none;
    }

    .stockwise-image {
      width: 100%;
      margin-bottom: 80px;
    }

    .project-card-left {
      flex-direction: column;
      height: auto;
    }

    .project-card-right {
      flex-direction: column-reverse;
      height: auto;
    }

    .project-image-content {
      width: 80vw;
      height: 40vw;
    }

    .project-image-content img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }

    .project-image-overlay:hover {
      opacity: 0.8;
    }

    .project-text {
      width: 80vw;
      display: flex;
      flex-direction: column;
    }

    .project-text-left {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      margin-left: 0;
    }

    .project-text-right {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      margin-right: 0;
    }

    .project-title-left {
      top: -35vw;
      right: 5vw;
      z-index: 3;
    }

    .project-title-right {
      top: -35vw;
      left: 5vw;
      z-index: 3;
    }

    .project-skills-left {
      position: initial;
      text-align: center;
      margin-top: 10px;
    }

    .project-skills-right {
      position: initial;
      text-align: center;
      margin-top: 10px;
    }

    .project-links {
      flex-direction: row;
    }

    .investify-image-overlay {
      justify-content: flex-start;
      align-items: flex-end;
    }

    .investify-image-overlay h2 {
      margin-left: 10px;
      font-size: 20px;
    }

    .nba-image-overlay {
      justify-content: flex-end;
      align-items: flex-end;
    }

    .nba-image-overlay h2 {
      margin-right: 10px;
      font-size: 20px;
    }

    .contact-text {
      width: 80vw;
      font-size: 18px;
    }
  }

  .r-link {
    --uirLinkDisplay: var(--rLinkDisplay, inline-block);
    --uirLinkTextColor: var(--rLinkTextColor);
    --uirLinkTextDecoration: var(--rLinkTextDecoration, none);

    display: var(--uirLinkDisplay) !important;
    text-decoration: var(--uirLinkTextDecoration) !important;
    margin: 0;
  }

  .animated-underline{
    --uiAnimatedUnderlineWidth: var(--animatedUnderlineWidth, 100%);
    --uiAnimatedUnderlineHeight: var(--animatedUnderlineHeight, 2px);
    --uiAnimatedUnderlineBgColor: var(--animatedUnderlineBgColor, currentColor);
    --uiAnimatedUnderlinePositionX: var(--animatedUnderlinePositionX, left);
    --uiAnimatedUnderlinePositionY: var(--animatedUnderlinePositionY, bottom);

    --rLinkDisplay: inline;

    background-image: linear-gradient(0, var(--uiAnimatedUnderlineBgColor) 0, var(--uiAnimatedUnderlineBgColor));
    background-size: var(--uiAnimatedUnderlineWidth) var(--uiAnimatedUnderlineHeight);
    background-position: var(--uiAnimatedUnderlinePositionX) var(--uiAnimatedUnderlinePositionY);
    background-repeat: no-repeat;

    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;

    will-change: background-size;
    transition: background-size .25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  :root{
    --animatedUnderlineHeight: 1rem;
    --animatedUnderlineBgColor: #A1C8FF;
  }

  .animated-underline_type5{
    --animatedUnderlineWidth: 100%;
    --animatedUnderlineHeight: 20px;
    --animatedUnderlinePositionY: 90%;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 1000px) {
    .animated-underline_type5{
      --animatedUnderlineHeight: 100%;
    }
  }

  .animated-underline_type5:hover{
    --animatedUnderlineHeight: 2.5rem;
  }

  .animated-underline_type4{
    --animatedUnderlineWidth: 0;
    --animatedUnderlineHeight: 1px;
  }

  .animated-underline_type4:hover{
    --animatedUnderlineWidth: 100%;
  }
</style>
