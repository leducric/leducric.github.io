const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


function PageTransitions(){
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
      sectBtn[i].addEventListener("mousedown", function () {
        let currentBtn = document.querySelectorAll(".active-btn");
        currentBtn[0].classList.remove("active-btn");
        this.classList.add("active-btn");
      });
    }

    // Sections Active class
    allSections.forEach((section) => {
      section.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        if (id) {
          // remove selected from the other btns
          sectBtns.forEach((btn) => {
            btn.classList.remove("active");
          });

          // add selected to the clicked btn
          e.target.closest(".control").classList.add("active");

          // hide other sections
          sections.forEach((section) => {
            section.classList.remove("active");
          });

          const element = document.getElementById(id);
          element.classList.add("active");
        }
      });
    });


    ///Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
      let element = document.body;
      element.classList.toggle('light-mode')
    })
}


PageTransitions();


/*//MOUSE CHANGE AND KNICKS SECTION
const blogsSection = document.querySelector('#blogs');
const knicksTitle = document.querySelector('.knicks-title');
const soundEffects = [
    './audio/msgsound.mp3', 
    './audio/crowd.mp3', 
    './audio/bang.mp3'
]; // replace with your sound effect file paths

let currentSound = null;

blogsSection.addEventListener('mouseenter', () => {
  // Change cursor to basketball image
  document.body.style.cursor = 'url(./img/basketball.png), auto';
});

blogsSection.addEventListener('mouseleave', () => {
  // Change cursor back to default
  document.body.style.cursor = 'auto';
});

knicksTitle.addEventListener('mouseenter', () => {
  // Change cursor to knicks image
  document.body.style.cursor = 'url(./img/knicks.png), auto';

  // Play a random sound effect
  const randomSoundIndex = Math.floor(Math.random() * soundEffects.length);
  const soundEffect = new Audio(soundEffects[randomSoundIndex]);
  if (!currentSound || currentSound.paused) {
    currentSound = soundEffect;
    currentSound.play();
  }
});

knicksTitle.addEventListener('mouseleave', () => {
  // Change cursor back to basketball image
  document.body.style.cursor = 'url(./img/basketball.png), auto';
});*/








//POPUP CONTROLS
// Get the dialog element for each portfolio item
var dialogs = document.querySelectorAll(".dialog");
var dialogCont = document.querySelectorAll(".dialog-content");

// Get the buttons that open the dialogs for each portfolio item
var btns = document.querySelectorAll(".learn-more");

// Get the <span> elements that close the dialogs for each portfolio item
var spans = document.querySelectorAll(".close");

// Get the controls element
var controls = document.querySelector(".controls");
var theme = document.querySelector(".theme-btn");

// When the user clicks on a button, open the corresponding dialog
btns.forEach(function (btn, index) {
  btn.onclick = function (event) {
    event.preventDefault();
    dialogs[index].classList.add("show");

    // Hide the controls when the popup is active
    controls.style.display = "none";
    theme.style.display = "none";

    // Set the first slide as active
    currentSlide = 1;
    activateSlide(currentSlide, index);


    if (btn.classList.contains("learn-more")) {
      // Scroll the window to center the popup vertically
      var dialogHeight = dialogCont[index].offsetHeight;
      var screenHeight = window.innerHeight;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var dialogTop = dialogCont[index].getBoundingClientRect().top + scrollTop;
      var distance = dialogTop - (screenHeight - dialogHeight) / 2;

      

      window.scrollTo({
        top: distance,
        behavior: "smooth"
      });
    }
  };
});

// Function to activate a slide
function activateSlide(n, index) {
  var slides = dialogCont[index].querySelectorAll('.slide');
  var buttons = dialogCont[index].querySelectorAll('.button');
  slides.forEach(slide => slide.classList.remove('activated'));
  buttons.forEach(button => button.classList.remove('activated'));
  slides[n - 1].classList.add('activated');
  buttons[n - 1].classList.add('activated');
}

// When the user clicks on <span> (x), close the corresponding dialog and show the controls
spans.forEach(function (span, index) {
  span.onclick = function () {
    dialogs[index].classList.remove("show");
    controls.style.display ="flex";
    theme.style.display ="flex";
  };
});

// When the user clicks anywhere outside of a dialog, close it and show the controls
window.onclick = function (event) {
  dialogs.forEach(function (dialog) {
    if (event.target == dialog) {
      dialog.classList.remove("show");
      controls.style.display = "flex";
      theme.style.display = "flex";
    }
  });
};

// Function to close the dialogs and show the controls
function closeDialog() {
  dialogs.forEach(function (dialog) {
    dialog.classList.remove("show");
  });
  controls.style.display = "flex";
  theme.style.display = "flex";
}










//SLIDER MENU CONTROLS
var slides = document.querySelectorAll('.slide');
var buttons = document.querySelectorAll('.button');
let currentSlide = 1;

//Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('activated');

    buttons.forEach((btn) => {
      btn.classList.remove('activated');
    });
  });
  slides[manual].classList.add('activated');
  buttons[manual].classList.add('activated');
}

buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});


/*//Javascript for image slider autoplay navigation
var repeat = function(activeClass){
  let active = document.getElementsByClassName('activated');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('activated');
      })

    slides[i].classList.add('activated');
    buttons[i].classList.add('activated');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 10000);
  }
  repeater();
}
repeat();*/


