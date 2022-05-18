import 'normalize.css';
import './styles.css';

class Events {
  static listeners() {
    this.hoverListener();
    this.clickListener();
    this.mobileMenuListener();
    this.imageSliderListener();
  }

  static hoverListener() {
    const dropDowns = document
      .getElementById('dropDownHover')
      .querySelectorAll('.linksContainer');
    dropDowns.forEach((dropDown) => {
      const menu = dropDown.parentElement;
      menu.addEventListener('mouseenter', () => {
        dropDown.classList.remove('hidden');
      });
      menu.addEventListener('mouseleave', () => {
        dropDown.classList.add('hidden');
      });
    });
  }

  static clickListener() {
    const dropDowns = document
      .getElementById('dropDownClick')
      .querySelectorAll('.linksContainer');
    dropDowns.forEach((dropDown) => {
      const header = dropDown.previousElementSibling;
      header.addEventListener('click', () => {
        dropDown.classList.toggle('hidden');
      });
    });
  }

  static mobileMenuListener() {
    const menuTabs = {
      tab1Button: 'tab1Page',
      tab2Button: 'tab2Page',
      tab3Button: 'tab3Page',
      tab4Button: 'tab4Page',
    };
    const buttons = document.querySelectorAll('.tabButton');
    const pages = document.querySelectorAll('.tabPage');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        if (!button.classList.contains('active')) {
          document.querySelector('.active').classList.remove('active');
          pages.forEach((page) => {
            if (!page.classList.contains('hidden')) {
              page.classList.add('hidden');
            }
          });
          button.classList.add('active');
          document.getElementById(menuTabs[button.id]).classList.remove('hidden');
        }
      });
    });
  }

  static imageSliderListener() {
    // Select image slider elements
    const leftArrow = document.getElementById('slideLeft');
    const rightArrow = document.getElementById('slideRight');
    const slideContainer = document.getElementById('slideContainer');
    const slides = slideContainer.querySelectorAll('.slideEntry');
    const slideNav = document.querySelector('.slideNav');

    function changeSlide(mode) {
      const activeSlide = slideContainer.querySelector('.active');
      switch (mode) {
        case 'left':
          if (activeSlide.previousElementSibling) {
            activeSlide.previousElementSibling.classList.add('active');
          } else {
            slideContainer.lastElementChild.classList.add('active');
          }
          break;
        case 'right':
          if (activeSlide.nextElementSibling) {
            activeSlide.nextElementSibling.classList.add('active');
          } else {
            slideContainer.firstElementChild.classList.add('active');
          }
          break;
        default:
          return;
      }
      activeSlide.classList.remove('active');
      // Update slideNav
      const slidesArray = Array.from(slides);
      const activeIndex = slidesArray.findIndex((element) => element.classList.contains('active'));
      slideNav.querySelector('.active').classList.remove('active');
      slideNav.children.item(activeIndex).classList.add('active');
    }

    // Add listener to left arrow
    leftArrow.addEventListener('click', () => {
      changeSlide('left');
    });

    // Add listener to right arrow
    rightArrow.addEventListener('click', () => {
      changeSlide('right');
    });

    // slideNav dots
    slides.forEach((slide, index) => {
      const navDot = document.createElement('div');
      navDot.classList.add('navDot');
      if (index === 0) {
        navDot.classList.add('active');
      }
      navDot.addEventListener('click', () => {
        slideContainer.querySelector('.active').classList.remove('active');
        slideNav.querySelector('.active').classList.remove('active');
        slide.classList.add('active');
        navDot.classList.add('active');
      });
      slideNav.append(navDot);
    });

    // Automatically cycle through slides
    setInterval(() => {
      changeSlide('right');
    }, 5000);
  }
}

Events.listeners();
