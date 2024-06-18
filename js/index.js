const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      delay: 3000,
    },
  });

  // бібліотека свайпер

 const accordions = document.querySelectorAll(".question__acordion__box")
    // задаємо перемінну акордеону  
 accordions.forEach(accordion => {
  accordion.addEventListener("click", e => {
    let accordionBtn = accordion.querySelector(".question__acordion__btn")
    accordion.classList.toggle("active")
    // при натискінні накидажмо на клас акордеон active
    // if (accordionBtn.textContent === "+") {
    //   accordionBtn.textContent = "-"
    // } else {
    //   accordionBtn.textContent = "+"
    // }  задати при відкриванні +, при закриванні - 
  })
 })

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// Робимо гамбургер 

const hamburger = document.querySelector(".hamburger")   
// задаємо перемінну гамбургеру    
const navMenu = document.querySelector(".heder__list")
// задаємо перемінну менюшці 

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
} )
// Закидуємо клас active на гамбургер та меню, попередньо прописавши його властивості в CSS

document.querySelectorAll(".header__list__link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}))

// Забираємо клас active при натисканні на меню, щоб меню не весіла на екрані


const f = document.getElementById('header__form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';

function submitted(event) {
  event.preventDefault();
  const url = google + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);