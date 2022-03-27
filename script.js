window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.preload').classList.add('preload-finished')
    setTimeout(() => {
      typeWriter()
    }, 1000)
  }, 2000);
});

/////////////// Theme Dropdown //////////////////////





const dropdown = () => {
    document.getElementById("dropdown").classList.toggle("show");
}
window.addEventListener('click', function(e){
  if (!document.getElementById('dropdown').contains(e.target) && (!document.getElementById('dropbtn').contains(e.target))) {
   document.getElementById('dropdown').classList.remove('show');
} 



  ///////////// Side nav ///////////////////////
  if (!document.getElementById('toggle-menu').contains(e.target) && (!document.getElementById('side-nav').contains(e.target))) {
    document.getElementById('side-nav').classList.add('hide');
  } 
  let hide = document.querySelector('.hide')
  let wrapperMenu = document.querySelector('.wrapper-menu');
  

  if(document.getElementById('side-nav').contains(hide)){
    wrapperMenu.classList.remove('open');
  }
  else{
    wrapperMenu.classList.add('open');
  }
})

toggleSideMenu = () => {
  document.querySelector('.nav').classList.toggle('hide');
}





///////////////////  Back to Top Button //////////////////


window.onscroll = function() {
  scrollFunction()
}

const scrollFunction = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("myBtn").classList.add('showScroll');
    // console.log('scrolling')
  } else {
    document.getElementById("myBtn").classList.remove('showScroll');
  }
}
const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





/////////////////////////////// Type Writer ///////////////////



const message = ['Hello, my name is Paweł, and this is my website.']
let textPosition = 0
const speed = 100

const typeWriter = () => {
  document.querySelector('#message').innerHTML = message[0].substring(0, textPosition) + ' <span class="caret"></span>'

  if(textPosition++ != message[0].length){
    setTimeout(typeWriter, speed)
  }
}





///////////////  Theme Switcher //////////////////
let root = document.documentElement;
const themes = `[
  {
    "id": "dark",
    "name": "Dark Theme",
    "colors": {
        "primary": "#2e2e2e",
        "secondary": "#252525",
        "elemColor": "#1b1b1b",
        "navbarColor": "rgba(30, 30, 30, 0.9)",
        "text": "#b8b8b8",
        "accentColor": "rgb(146, 146, 146)",
        "shadowColor": "rgba(24, 24, 24, 0.719)",
        "scrollbarColor": "#222222",
        "scrollBarColorHover": "#1f1f1f",
        "scrollBarTrackColor": "#292929"
    }
},

{
  "id": "light",
  "name": "Light Theme",
  "colors": {
      "primary": "rgb(238, 238, 238)",
      "secondary": "#e9e9e9",
      "elemColor": "#f6f6f6",
      "navbarColor": "rgba(246, 246, 246, 0.9)",
      "text": "#181818",
      "accentColor": "#333",
      "shadowColor": "rgba(170, 170, 170, 0.719)",
      "scrollbarColor": "#bebebe",
      "scrollBarColorHover": "#aaaaaa",
      "scrollBarTrackColor": "#d4d4d4"
  }
},

  {
      "id": "dark-blue",
      "name": "Dark Blue Theme",
      "colors": {
          "primary": "#2e2e2e",
          "secondary": "#252525",
          "elemColor": "#1b1b1b",
          "navbarColor": "rgba(30, 30, 30, 0.9)",
          "text": "#b8b8b8",
          "accentColor": "rgb(45, 104, 200)",
          "shadowColor": "rgba(24, 24, 24, 0.719)",
          "scrollbarColor": "#222222",
          "scrollBarColorHover": "#1f1f1f",
          "scrollBarTrackColor": "#292929"
      }
  },
  
  {
    "id": "light-blue",
    "name": "Light Blue Theme",
    "colors": {
        "primary": "rgb(238, 238, 238)",
        "secondary": "#e9e9e9",
        "elemColor": "#f6f6f6",
        "navbarColor": "rgba(246, 246, 246, 0.9)",
        "text": "#181818",
        "accentColor": "rgb(45, 104, 200)",
        "shadowColor": "rgba(170, 170, 170, 0.719)",
        "scrollbarColor": "#bebebe",
        "scrollBarColorHover": "#aaaaaa",
        "scrollBarTrackColor": "#d4d4d4"
    }
  },
  {
    "id": "dark-red",
    "name": "Dark Red Theme",
    "colors": {
      "primary": "#2e2e2e",
      "secondary": "#252525",
      "elemColor": "#1b1b1b",
      "navbarColor": "rgba(30, 30, 30, 0.9)",
      "text": "#b8b8b8",
      "accentColor": "#c82d2d",
      "shadowColor": "rgba(24, 24, 24, 0.719)",
      "scrollbarColor": "#222222",
      "scrollBarColorHover": "#1f1f1f",
      "scrollBarTrackColor": "#292929"
    }
  },

{
    "id": "light-red",
    "name": "Light Red Theme",
    "colors": {
      "primary": "rgb(238, 238, 238)",
      "secondary": "#e9e9e9",
      "elemColor": "#f6f6f6",
      "navbarColor": "rgba(246, 246, 246, 0.9)",
      "text": "#181818",
      "accentColor": "#c82d2d",
      "shadowColor": "rgba(170, 170, 170, 0.719)",
      "scrollbarColor": "#bebebe",
      "scrollBarColorHover": "#aaaaaa",
      "scrollBarTrackColor": "#d4d4d4"
    }
  },
  {
    "id": "dark-yellow",
    "name": "Dark Yellow Theme",
    "colors": {
      "primary": "#2e2e2e",
      "secondary": "#252525",
      "elemColor": "#1b1b1b",
      "navbarColor": "rgba(30, 30, 30, 0.9)",
      "text": "#b8b8b8",
      "accentColor": "#cece42",
      "shadowColor": "rgba(24, 24, 24, 0.719)",
      "scrollbarColor": "#222222",
      "scrollBarColorHover": "#1f1f1f",
      "scrollBarTrackColor": "#292929"
  }
},

{
    "id": "light-yellow",
    "name": "Light Yellow Theme",
    "colors": {
      "primary": "rgb(238, 238, 238)",
      "secondary": "#e9e9e9",
      "elemColor": "#f6f6f6",
      "navbarColor": "rgba(246, 246, 246, 0.9)",
      "text": "#181818",
      "accentColor": "#cece42",
      "shadowColor": "rgba(170, 170, 170, 0.719)",
      "scrollbarColor": "#bebebe",
      "scrollBarColorHover": "#aaaaaa",
      "scrollBarTrackColor": "#d4d4d4"
      
  }
},

{
    "id": "dark-green",
    "name": "Dark Green Theme",
    "colors": {
      "primary": "#2e2e2e",
      "secondary": "#252525",
      "elemColor": "#1b1b1b",
      "navbarColor": "rgba(30, 30, 30, 0.9)",
      "text": "#b8b8b8",
      "accentColor": "#1ad11a",
      "shadowColor": "rgba(24, 24, 24, 0.719)",
      "scrollbarColor": "#222222",
      "scrollBarColorHover": "#1f1f1f",
      "scrollBarTrackColor": "#292929"
  }
},

{
    "id": "light-green",
    "name": "Light Green Theme",
    "colors": {
      "primary": "rgb(238, 238, 238)",
      "secondary": "#e9e9e9",
      "elemColor": "#f6f6f6",
      "navbarColor": "rgba(246, 246, 246, 0.9)",
      "text": "#181818",
      "accentColor": "#1ad11a",
      "shadowColor": "rgba(170, 170, 170, 0.719)",
      "scrollbarColor": "#bebebe",
      "scrollBarColorHover": "#aaaaaa",
      "scrollBarTrackColor": "#d4d4d4"
  }
},

{
    "id": "dark-purple",
    "name": "Dark Purple Theme",
    "colors": {
      "primary": "#2e2e2e",
      "secondary": "#252525",
      "elemColor": "#1b1b1b",
      "navbarColor": "rgba(30, 30, 30, 0.9)",
      "text": "#b8b8b8",
      "accentColor": "#b91bb9",
      "shadowColor": "rgba(24, 24, 24, 0.719)",
      "scrollbarColor": "#222222",
      "scrollBarColorHover": "#1f1f1f",
      "scrollBarTrackColor": "#292929"
  }
},

{
    "id": "light-purple",
    "name": "Light Purple Theme",
    "colors": {
      "primary": "rgb(238, 238, 238)",
      "secondary": "#e9e9e9",
      "elemColor": "#f6f6f6",
      "navbarColor": "rgba(246, 246, 246, 0.9)",
      "text": "#181818",
      "accentColor": "#880188",
      "shadowColor": "rgba(170, 170, 170, 0.719)",
      "scrollbarColor": "#bebebe",
      "scrollBarColorHover": "#aaaaaa",
      "scrollBarTrackColor": "#d4d4d4"
  }
},

{
    "id": "dark-orange",
    "name": "Dark Orange Theme",
    "colors": {
      "primary": "#2e2e2e",
      "secondary": "#252525",
      "elemColor": "#1b1b1b",
      "navbarColor": "rgba(30, 30, 30, 0.9)",
      "text": "#b8b8b8",
      "accentColor": "#ffa600",
      "shadowColor": "rgba(24, 24, 24, 0.719)",
      "scrollbarColor": "#222222",
      "scrollBarColorHover": "#1f1f1f",
      "scrollBarTrackColor": "#292929"
  }
},

{
    "id": "light-orange",
    "name": "Light Orange Theme",
    "colors": {
      "primary": "rgb(238, 238, 238)",
      "secondary": "#e9e9e9",
      "elemColor": "#f6f6f6",
      "navbarColor": "rgba(246, 246, 246, 0.9)",
      "text": "#181818",
      "accentColor": "#ffa600",
      "shadowColor": "rgba(170, 170, 170, 0.719)",
      "scrollbarColor": "#bebebe",
      "scrollBarColorHover": "#aaaaaa",
      "scrollBarTrackColor": "#d4d4d4"
  }
}
]`
const obj = JSON.parse(themes);

root.style.setProperty('--primary', localStorage.getItem('primary'))
root.style.setProperty('--secondary', localStorage.getItem('secondary'));
root.style.setProperty('--elem-color', localStorage.getItem('elem-color'));
root.style.setProperty('--navbar-color', localStorage.getItem('navbar-color') );
root.style.setProperty('--accent-color', localStorage.getItem('accent-color'));
root.style.setProperty('--text', localStorage.getItem('text'));
root.style.setProperty('--shadow-color', localStorage.getItem('shadow-color'));
root.style.setProperty('--scrollbar-color', localStorage.getItem('scrollbar-color'));
root.style.setProperty('--scrollbar-color-hover', localStorage.getItem('scrollbar-color-hover'));
root.style.setProperty('--scrollbar-track-color', localStorage.getItem('scrollbar-track-color'));

const setTheme = (theme) => {
  // console.log(`Chosen theme is ${theme}`)

  let chosenTheme = obj.filter(function(val) {
    if(val.id === theme){

      root.style.setProperty('--primary', val.colors.primary);
      root.style.setProperty('--secondary', val.colors.secondary);
      root.style.setProperty('--elem-color', val.colors.elemColor);
      root.style.setProperty('--navbar-color', val.colors.navbarColor);
      root.style.setProperty('--accent-color', val.colors.accentColor);
      root.style.setProperty('--text', val.colors.text);
      root.style.setProperty('--shadow-color', val.colors.shadowColor);
      root.style.setProperty('--scrollbar-color', val.colors.scrollbarColor);
      root.style.setProperty('--scrollbar-color-hover', val.colors.scrollBarColorHover);
      root.style.setProperty('--scrollbar-track-color', val.colors.scrollBarTrackColor);

      localStorage.setItem('primary', val.colors.primary)
      localStorage.setItem('secondary', val.colors.secondary)
      localStorage.setItem('elem-color', val.colors.elemColor)
      localStorage.setItem('navbar-color', val.colors.navbarColor)
      localStorage.setItem('accent-color', val.colors.accentColor)
      localStorage.setItem('text', val.colors.text)
      localStorage.setItem('shadow-color', val.colors.shadowColor)
      localStorage.setItem('scrollbar-color', val.colors.scrollbarColor)
      localStorage.setItem('scrollbar-color-hover', val.colors.scrollBarColorHover)
      localStorage.setItem('scrollbar-track-color', val.colors.scrollBarTrackColor)
      
    }
  })
}



//////////////////// Slide In //////////////////////

let pageSections = [...document.querySelectorAll('.slide-in')]

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
          entry.target.children[0].classList.toggle('active', entry.isIntersecting)
          // if(entry.isIntersecting) observer.unobserve(entry.target) //prevent from sliding out
    })
  },
  {
      rootMargin: '0%',
      threshold: 0.1,
  }
)

pageSections.forEach(section => {
    observer.observe(section)
})





/////////////////////////////////////////// Skills Horizontal Slider //////////////////////////////////


// window.onload = function(){ 
  const buttonRight = document.getElementById('slideRight');
  const buttonLeft = document.getElementById('slideLeft');

  buttonRight.onclick = function () {
  document.getElementById('scroll-horizontally').scrollLeft += 250;
  };
  buttonLeft.onclick = function () {
  document.getElementById('scroll-horizontally').scrollLeft -= 350;
  };
// };



//////////////////////////////////////////// Contact Me Form ////////////////////////////////////////////////
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const subjectInput = document.getElementById('subject')
const messageInput = document.getElementById('message-input')
const submit = document.getElementById('submit')
const errorMessage = document.querySelectorAll('.error-message')
const contactForm = document.querySelector('form')
const moreInfo = document.querySelector('.info')
const infoModal = document.querySelector('.info-modal')
const infoModalCloseBtn = document.querySelector('.info-modal_close-btn')

moreInfo.onclick = () => {
  infoModal.style.display = 'block'
}
infoModalCloseBtn.onclick = () => {
  infoModal.style.display = 'none'
}
const validateForm = () =>{
    let errorFlag = false
    if (nameInput.value.length < 1){
        errorMessage[0].innerText = "Name cannot be blank"
        nameInput.classList.add("error-border")
        errorFlag = true
    }
    if (!emailIsValid(emailInput.value)){
        errorMessage[1].innerText = "Email is NOT Valid"
        emailInput.classList.add("error-border")
        errorFlag = true
    }
    if (subjectInput.value.length < 1){
        errorMessage[2].innerText = "Subject cannot be blank"
        subjectInput.classList.add("error-border")
        errorFlag = true
    }
    if (messageInput.value.length < 1){
        errorMessage[3].innerText = "Message cannot be blank"
        messageInput.classList.add("error-border")
        errorFlag = true
    }
    

    nameInput.addEventListener("input", () =>{
        nameInput.classList.remove("error-border")
        errorMessage[0].innerText = ""
    })
    emailInput.addEventListener("input", () =>{
        emailInput.classList.remove("error-border")
        errorMessage[1].innerText = ""
    })
    subjectInput.addEventListener("input", () =>{
        subjectInput.classList.remove("error-border")
        errorMessage[2].innerText = ""
    })
    messageInput.addEventListener("input", () =>{
        messageInput.classList.remove("error-border")
        errorMessage[3].innerText = ""
    })



    if(!errorFlag){
        // console.log('success')
        submit.classList.add('pending')
        setTimeout(() =>{
            submit.classList.remove('pending') 
            submit.classList.add('success')

            setTimeout(() =>{
                submit.classList.remove('success')
                contactForm.reset()
            }, 2000)
        }, 2000)
    }
}


const emailIsValid = (emailInput) =>{
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(emailInput)
}



//////////////////////////////////////////// Toggle Social Icons //////////////////////////////


let toggleSocialIconsBtn = document.getElementById('toggle-social')
const socialIcons = document.querySelector('.social')
let deg = -90
toggleSocialIconsBtn.onclick = () => {
  socialIcons.classList.toggle('hidesocial')
  deg += 180
  deg >= 270 ? deg = -90 : deg
  toggleSocialIconsBtn.style.transform = `rotate(${deg}deg)`
}


////////////////////////////////////////////// Gmail info box /////////////////////////////
const mailSocialIconToggle = document.getElementById('mail-social-icon')
const gmailInfoBox = document.querySelector('.gmail-info-box')
const copyToClipboardBtn = document.querySelector('.copy-to-clipboard-btn')
const snackbar = document.querySelector('.snackbar')

mailSocialIconToggle.onclick = () => {
  gmailInfoBox.classList.toggle('active')
  
}
copyToClipboardBtn.onclick = () => {
  snackbar.classList.add('active')
  navigator.clipboard.writeText('pawelczarnecki0225@gmail.com');
  
  setTimeout(() =>{
    snackbar.classList.remove('active')
  },2000); 
}

/////////////////////////////////////////////////////// Scroll To Section
let scrollLocation
const scrollToSection = (section) =>{
  switch (section) {
    case home:
      // scrollLocation = document.getElementById('home').scrollIntoView();
      scrollToTop()
      break;
    case about:
      scrollLocation = document.getElementById('about').scrollIntoView();
    break;
    case skills:
      scrollLocation = document.getElementById('skills').scrollIntoView();
    break;
    case work:
      scrollLocation = document.getElementById('work').scrollIntoView() - 200;
    break;
    case contact:
      scrollLocation = document.getElementById('contact').scrollIntoView();
    break;
    default:
      break;
  }
}





//////////////////////////// Grid/List View //////////////////////////
const gridViewBtn = document.querySelector('.grid-view-btn')
const listViewBtn = document.querySelector('.list-view-btn')
const workCardContainer = document.querySelector('.my-work_card-container')
const workCard = document.querySelectorAll('.my-work_card')

// toggle card view
gridViewBtn.onclick = () => {
  workCardContainer.classList.remove('list')
  workCardContainer.classList.add('grid')
  listViewBtn.classList.remove('checked')
  gridViewBtn.classList.add('checked')  

}
// toggle list view
listViewBtn.onclick = () => {
  workCardContainer.classList.remove('grid')
  workCardContainer.classList.add('list')
  gridViewBtn.classList.remove('checked')
  listViewBtn.classList.add('checked')  
}
// flip card
workCard.forEach(card =>{
  card.onclick = () =>{
    card.classList.toggle('flipped')
  }
})