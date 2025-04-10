import { createCardElement } from '../dom/card.js';

class Card {
  constructor({ title, description }) {
    this.element = createCardElement({ title, description });
    this.toLearnList = document.querySelector('.to-learn-stickies');
    this.understoodList = document.querySelector('.understood-stickies');
    this.addEventListeners();
    this.render();
  }

  render() {
    this.toLearnList.appendChild(this.element);
  }

  addEventListeners() {
    const cardBody = this.element.firstElementChild;
    const removeButton = cardBody.querySelector('.btn-danger');
    const topPriorityButton = removeButton.nextElementSibling;
    const understoodButton = cardBody.children[4];

    removeButton.addEventListener('click', () => {
      console.log('Remove clicked');
    });

    topPriorityButton.addEventListener('click', () => {
      console.log('TopPriority clicked');
    });

    understoodButton.addEventListener('click', () => {
      console.log('Understood clicked');
    });
  }
}

export { Card };
