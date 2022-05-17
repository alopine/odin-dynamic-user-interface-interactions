import 'normalize.css';
import './styles.css';

class Events {
  static listeners() {
    this.hoverListener();
    this.clickListener();
  }

  static hoverListener() {
    const dropDowns = document.getElementById('dropDownHover').querySelectorAll('.linksContainer');
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
    const dropDowns = document.getElementById('dropDownClick').querySelectorAll('.linksContainer');
    dropDowns.forEach((dropDown) => {
      const header = dropDown.previousElementSibling;
      header.addEventListener('click', () => {
        dropDown.classList.toggle('hidden');
      });
    });
  }
}

Events.listeners();
