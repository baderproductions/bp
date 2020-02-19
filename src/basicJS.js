import $ from 'jquery';

// DOM variables
const hbIcon = document.querySelector('#hamburger-icon');
const hbRight = document.querySelector('.hamburger-nav');
const darkMode = document.querySelector('#dmToggle');
const nav = document.querySelector('.nav-ul');
const goDeep = document.querySelector('.scroll-down');

// Dark Mode
const container = document.querySelector('.container');
const mainNav = document.querySelector('.main-nav');
const hambNav = document.querySelector('.hamburger-nav');
const navLi = document.querySelector('.nav-li');
const landingInfo = document.querySelector('.landing-info');
const separator = document.querySelector('.separator');
const projectSection = document.querySelector('.project-section');
const aboutText = document.querySelector('.about-info');
const aboutFooter = document.querySelector('.about-footer');
const footer = document.querySelector('.footer');
const profile = document.querySelector('.profile');
const aboutMeSection = document.querySelector('.about-me-section');
const questionsSection = document.querySelector('.questions');
const requestForm = document.querySelector('.request-form');

// Mobile viewport fix on resize

// Get viewport height and multiply it by 1% to get value for vh unit
let vh = window.innerHeight * 0.01;
// Then set the value in the --vh variable property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// Proper resize scaling
window.addEventListener('resize', () => {
    // Execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });


//Scroll down onClick "GO DEEPER" button

$(goDeep).click(function(){
    var $target = $('html, body');
    $target.animate({scrollTop: $target.height()}, 500);
});

// Hamburger menu


// Set initial boolean
let hbOpen = false;
// OnClick toggle listener
hbIcon.addEventListener('click', hbToggle);
// Adding and removing DOM elements when hamburger is clicked
function hbToggle() {
    if(!hbOpen) {
        hbIcon.classList.add('open');
        hbRight.classList.add('show');
        nav.classList.add('show');
        hbOpen = true;
    } else {
        hbIcon.classList.remove('open');
        hbRight.classList.remove('show');
        nav.classList.remove('show');
        hbOpen = false;
    }
}

// Dark Mode

// Set initial boolean
let dark = false;
// OnClick toggle listener
darkMode.addEventListener('click', toggleDark);
// Adding and removing DOM elements when hamburger is clicked
function toggleDark() {
   if(!dark) {
        container.classList.add('dark');
        mainNav.classList.add('dark');
        hambNav.classList.add('dark');
        navLi.classList.add('dark');

        // Case order:
        // 1 - VS Live Server testing
        // 2 - Github webpage deployment without index
        // 3 - Github webpage deployment with index
        switch (window.location.pathname) {
            case '/':
            case '/bp/':
                landingInfo.classList.add('dark');
                projectSection.classList.add('dark');
                separator.classList.add('dark');
                footer.classList.add('dark');
            break;

            case '/about':
            case '/bp/about':
                aboutText.classList.add('dark');
                aboutFooter.classList.add('dark');
                profile.classList.add('dark');
                aboutMeSection.classList.add('dark');
                questionsSection.classList.add('dark');
                requestForm.classList.add('dark');
            break;
        }
        dark = true;
    } else {
        container.classList.remove('dark');
        mainNav.classList.remove('dark');
        hambNav.classList.remove('dark');
        navLi.classList.remove('dark');

        // Case order:
        // 1 - VS Live Server testing
        // 2 - Github webpage deployment without index
        // 3 - Github webpage deployment with index
        switch (window.location.pathname) {
            case '/':
            case '/bp/':
                landingInfo.classList.remove('dark');
                projectSection.classList.remove('dark');
                separator.classList.remove('dark');
                footer.classList.remove('dark');
            break;

            case '/about':
            case '/bp/about':
                aboutText.classList.remove('dark');
                aboutFooter.classList.remove('dark');
                profile.classList.remove('dark');
                aboutMeSection.classList.remove('dark');
                questionsSection.classList.remove('dark');
                requestForm.classList.remove('dark');
            break;
        }
        dark = false;
    }
}

// About Page - Collapse Qustions

const coll = document.getElementsByClassName("collapse");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
}