<template>
  <div ref="homePage" id="portfolio">
    <nav id="navbar" class="navbar navbar-light">
      <div @click="scrollTo('homePage')" class="brand-image" style="cursor: pointer;">
        <img src="./assets/images/sam_brand.png" alt="">
      </div>
      <div class="navbar-nav">
        <a v-for="navLink in navLinks" @click="scrollTo(navLink.element)" class="nav-item nav-link r-link animated-underline animated-underline_type4" style="cursor: pointer; font-weight: 300; color:#eb5e34;">{{ navLink.name }}</a>
        <a class="nav-item nav-link" id="navbar-resume-link" style="font-weight: 300; color: white; border: 1px #eb5e34 solid; padding-left: 20px; padding-right: 20px; transition: 0.3s; border-radius: 4px;" :href="`${publicPath}sam-mccarthy-software-engineer.pdf`" target="_blank" download>Resume</a>
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
        <p class="welcome-first">Hi, my name is</p>
        <h2 class="r-link animated-underline animated-underline_type5 welcome-name">Sam McCarthy.</h2>
        <h3 class="welcome-quote">I love to build things for the web.</h3>
        <div class="welcome-intro">
          <p class="r-link animated-underline animated-underline_type4">I'm a Melbourne based software engineer focused on building unique digital experiences. I have done work in both front-end and back-end development as well as design with a variety of languages. </p>
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
              <h5 style="color: #eb5e34; font-size: 15px;">Adjust bio length:</h5>
              <div class="about-text-form">
                <div v-for="(index) in 6">
                  <input style="cursor: pointer;" class="form-check-input" type="radio" name="radio" @click="setBioLength(index)" :checked="bioLength === index">
                </div>
              </div>
              <div class="text-size-options">
                <h5 style="color: #eb5e34; font-size: 15px;">Shortest</h5>
                <h5 style="color: #eb5e34; font-size: 15px;">Longest</h5>
              </div>
            </div>
            <div class="about-text">
              <strong style="font-weight: 700; color: #eb5e34;">Sam McCarthy</strong> is
              <span v-if="bioLength > 1"> a software engineer<span v-show="bioLength === 2">,</span>
                <span v-show="bioLength === 2"> a tech enthusiast, the absolute <span style="color: #eb5e34;"><strong>grooviest</strong></span>, and</span>
                <span v-show="bioLength > 2"> specialised in building <span v-show="bioLength === 4 || bioLength === 6" style="color: #eb5e34;"><strong>exceptional</strong></span><span v-show="bioLength === 3 || bioLength === 5">exceptional</span> digital experiences. </span>
                <span v-show="bioLength > 3">What drives Sam is a passion for tech, excitement for growth and the <span v-show="bioLength > 4" style="color: #eb5e34;"><strong>motivation</strong></span><span v-show="bioLength === 4">motivation</span> to excel.</span>
                <span v-show="bioLength > 2"> He loves to spend his time coding and <span v-show="bioLength === 3 || bioLength === 6" style="color: #eb5e34;"><strong>collaborating</strong></span><span v-show="bioLength === 4 || bioLength === 5">collaborating</span> with great people<span>, but </span></span>
                <span v-show="bioLength > 1 && bioLength < 6"> ultimately <span v-show="bioLength > 2">Sam</span> <span v-show="bioLength > 2">is</span> </span>
                <span v-show="bioLength === 4 || bioLength === 6"> at the end of the day Sam is</span>
              </span>
              a problem solver at heart.
              <span v-show="bioLength > 4"> If you ask Sam what made him into who he is today, he will tell you</span>
              <span v-show="bioLength === 5"> it all starts with good habits.</span>
              <span v-show="bioLength === 6"> it all starts with good habits,</span>
              <span v-show="bioLength === 6"> ambition and, most importantly, a good system for being the best version of <span style="color: #eb5e34;"><strong>YOU</strong></span> everyday.</span>
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

      <div class="project-card experience-card-left">
        <div>
          <a href="https://spotpass.com/">
            <img class="experience-logo" src="./assets/images/spotpass.svg" alt="Spotpass button">
          </a>
        </div>

        <div class="project-text" style="z-index: 2">
          <div class="experience-text-left">
            <p style="font-size: 13px; margin: 0; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);"><a href="https://spotpass.com/" style="color: #eb5e34;" target="_blank">Spotpass</a>
              is a micropayment system designed to allow everyone to get instant access to their favourite content for 99c or less.<br><br>
              Being the sole Front End Developer at Spotpass, I was required to build applications from the ground up including our internal admin portal and producer portal. I would also add new features to and maintain our consumer flow.</p>
          </div>
          <div class="experience-skills-left">
            <p style="font-size: 12px; font-weight: 700; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);"><span class="r-link animated-underline animated-underline_type4">Vue3</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">TypeScript</span>  &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Single-spa</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">GraphQL</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">TailwindCSS</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Scrum</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Netlify</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Browserstack</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Figma</span></p>
          </div>
          <p class="experience-period" style="font-size: 12px; font-weight: 100;">Jun 2021 - Present</p>
          <h2 class="experience-title-left" style="font-size: 45px; font-weight: 100; border-bottom: 3px #eb5e34 solid;"><a href="https://spotpass.com/" style="color: white; text-decoration: none;" target="_blank">Spotpass</a></h2>
        </div>
        <div class="experience-links">
          <a href="https://github.com/spotpass" target="_blank"><span class="iconify" data-icon="ant-design:github-filled" data-inline="false"></span></a>
          <a href="https://spotpass.com/" target="_blank"><span class="iconify" data-icon="feather:external-link" data-inline="false"></span></a>
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
              <a href="http://www.wegathertogather.com/" target="_blank"><div class="project-image-overlay"></div></a>
            </div>
            <div class="project-text" style="z-index: 2">
              <div class="project-text-left">
                <p style="font-size: 13px; margin: 0; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);"><a href="http://www.wegathertogather.com/" style="color: #eb5e34;" target="_blank">ToGather</a> is a platform that allows groups and couples to easily plan activities together by consolidating activities, times and location all in one spot. </p>
              </div>
              <div class="project-skills-left">
                <p style="font-size: 12px; font-weight: 700; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);"><span class="r-link animated-underline animated-underline_type4">Ruby</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Ruby on Rails</span>  &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">JavaScript</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">DOM</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Meetup API</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">PostgreSQL</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Figma</span></p>
              </div>
              <h2 class="project-title-left" style="font-size: 45px; font-weight: 100; border-bottom: 3px #eb5e34 solid;"><a href="http://www.wegathertogather.com/" style="color: white; text-decoration: none;" target="_blank">ToGather</a></h2>
            </div>
            <div class="project-links">
              <a href="https://github.com/Shivika-S/ToGather" target="_blank"><span class="iconify" data-icon="ant-design:github-filled" data-inline="false"></span></a>
              <a href="http://www.wegathertogather.com/" target="_blank"><span class="iconify" data-icon="feather:external-link" data-inline="false"></span></a>
            </div>
          </div>

          <div class="project-card project-card-right">
            <div class="project-links">
              <a href="https://github.com/sammyshows/air_door" target="_blank"><span class="iconify" data-icon="ant-design:github-filled" data-inline="false"></span></a>
              <a href="https://airdoor.herokuapp.com/" target="_blank"><span class="iconify" data-icon="feather:external-link" data-inline="false"></span></a>
            </div>
            <div class="project-text">
              <div class="project-text-right">
                <p style="font-size: 13px; margin: 0; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);"><a href="https://airdoor.herokuapp.com/" style="color: #eb5e34;" target="_blank">AirDoor</a> is an app that lets you book your next getaway anywhere in the world and lets you find your next visitor.</p>
              </div>
              <div class="project-skills-right">
                <p style="font-size: 12px; font-weight: 700; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);"><span class="r-link animated-underline animated-underline_type4">Ruby</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Ruby on Rails</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Mapbox API</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Cloudinary</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">PostgreSQL</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Figma</span></p>
              </div>
              <h2 class="project-title-right" style="font-size: 45px; font-weight: 100; border-bottom: 3px #eb5e34 solid;"><a href="https://airdoor.herokuapp.com/" style="color: white; text-decoration: none;" target="_blank">AirDoor</a></h2>
            </div>
            <div class="project-image-content">
              <img src="./assets/images/airdoor-1.png" alt="">
              <a href="https://airdoor.herokuapp.com/" target="_blank"><div class="project-image-overlay"></div></a>
            </div>
          </div>

          <div class="project-card project-card-left">
            <div class="project-image-content">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">
              <div class="project-image-overlay investify-image-overlay">
                <h2>Coming soon...</h2>
              </div>
            </div>
            <div class="project-text">
              <div class="project-text-left">
                <p style="font-size: 13px; margin: 0; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);">Investify provides analytics, research and reports on stocks for individuals, making it simple to track your investments.</p>
              </div>
              <div class="project-skills-left">
                <p style="font-size: 12px; font-weight: 700; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);"><span class="r-link animated-underline animated-underline_type4">Ruby</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Ruby on Rails</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Yahoo Finance API</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">PostgreSQL</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Figma</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">React</span></p>
              </div>
              <h2 class="project-title-left" style="font-size: 45px; font-weight: 100; border-bottom: 3px #eb5e34 solid;">Investify</h2>
            </div>
            <div class="project-links">
              <a href="https://github.com/sammyshows/investify" target="_blank"><span class="iconify" data-icon="ant-design:github-filled" data-inline="false"></span></a>
            </div>
          </div>

          <div class="project-card project-card-right nba-project-card">
            <div class="project-links">
              <a href="https://github.com/sammyshows/all-nba" target="_blank"><span class="iconify" data-icon="ant-design:github-filled" data-inline="false"></span></a>
            </div>
            <div class="project-text">
              <div class="project-text-right">
                <p style="font-size: 13px; margin: 0; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);">All NBA is the place to stay updated with the latest news around the league and see live updates of games.</p>
              </div>
              <div class="project-skills-right">
                <p style="font-size: 12px; font-weight: 700; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);"><span class="r-link animated-underline animated-underline_type4">Ruby</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Ruby on Rails</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">NBA API</span> &nbsp;&nbsp;· &nbsp;&nbsp; <span class="r-link animated-underline animated-underline_type4">JavaScript</span>&nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">React</span> &nbsp;&nbsp;· &nbsp;&nbsp;<span class="r-link animated-underline animated-underline_type4">Figma</span></p>
              </div>
              <h2 class="project-title-right" style="font-size: 45px; font-weight: 100; border-bottom: 3px #eb5e34 solid;">All NBA</h2>
            </div>
            <div class="project-image-content">
              <img src="https://images.unsplash.com/photo-1499754162586-08f451261482?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">
              <div class="project-image-overlay nba-image-overlay">
                <h2>Coming soon...</h2>
              </div>
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
      skills: [ 'Vue3', 'TypeScript', 'GraphQL', 'Single-spa', 'TailwindCSS', 'Ruby', 'Ruby on Rails', 'JavaScript', 'REST APIs', 'DOM Manipulation', 'PostgreSQL', 'Agile Methodologies', 'Wireframes', 'Netlify', 'Browserstack', 'Figma', 'HTML5', 'CSS3', 'Git', 'GitHib', 'Bootstrap' ]
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
    background-color: #eb5e34;
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
    background-color: white;
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
    border-left: 1px solid #eb5e34;
    border-bottom: 1px solid #eb5e34;
  }
  #section07 a span:nth-of-type(2) {
    bottom: 64px;
    -webkit-animation-delay: .15s;
    animation-delay: .15s;
    border-left: 1px solid #eb5e34;
    border-bottom: 1px solid #eb5e34;

  }
  #section07 a span:nth-of-type(3) {
    bottom: 80px;
    -webkit-animation-delay: .3s;
    animation-delay: .3s;
    border-left: 1px solid #eb5e34;
    border-bottom: 1px solid #eb5e34;
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
    border: 1px #eb5e34 solid;
    background: #0A192E;
    transition: 0.3s;
    cursor: pointer;
    margin-top: 5vh;
    box-shadow: 0 0 15px rgba(0,0,0,0.35);
  }

  .contact-button:hover {
    background: #eb5e34;
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
    background: #eb5e34;
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
      font-size: 11px;
    }

    .nav-link {
      margin-right: 10px !important;
    }
  }

  .page-index h1 {
    color: #eb5e34;
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
    background-color: #eb5e34;
  }

  .page-title::after {
    content: "";
    display: block;
    position: relative;
    top: 3vh;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: #eb5e34;
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
    background-color: #eb5e34;
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
    background-color: #eb5e34;
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
    color: #eb5e34;
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
    background: #ff3c00;
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
    border: 3px #eb5e34 solid;
  }

  .experience-page {
    width: 65%;
    margin: 0 auto;
    padding-top: 5vh;
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
    background: #eb5e34;
    opacity: 0.8;
    transition: all 0.9s ease;
  }

  .project-image-overlay:hover {
    opacity: 0;
  }

  .project-image-overlay {
    font-size: 30px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  }

  .experience-card-left {
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
    background-color: #18355e;
    width: 35vw;
    height: auto;
    padding: 20px 30px 20px 50px;
    border-radius: 4px;
    z-index: 2;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0,0,0,0.35);
  }

  .project-text-left {
    margin-left: -9vw;
    background-color: #18355e;
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
    background-color: #18355e;
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
    color: #eb5e35;
    transition: 0.3s;
  }

  .iconify:hover {
    color: #ff906e;
  }

  .experience-skills-left {
    position: absolute;
    width: 100%;
    min-width: 100%;
    bottom: -20px;
    right: -4vh;
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

  .experience-period {
    position: absolute;
    top: 17px;
    right: 28vh;
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
      color: #eb5e34;
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

    .experience-card-left {
      flex-direction: column;
    }

    .experience-text-left {
      width: 100%;
      margin: 20px 0;
      padding: 10px;
    }

    .experience-skills-left {
      position: unset;
      text-align: center;
    }

    .experience-links {
      flex-direction: row;
    }

    .experience-title-left {
      display: none;
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

  .r-link{
    --uirLinkDisplay: var(--rLinkDisplay, inline-block);
    --uirLinkTextColor: var(--rLinkTextColor);
    --uirLinkTextDecoration: var(--rLinkTextDecoration, none);

    display: var(--uirLinkDisplay) !important;
    text-decoration: var(--uirLinkTextDecoration) !important;
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
    --animatedUnderlineBgColor: #eb5e34;
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
