import 'normalize.css';
import './styles.css';

class Events {
  static listeners() {
    this.hoverListener();
    this.clickListener();
    this.mobileMenuListener();
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
}

Events.listeners();
