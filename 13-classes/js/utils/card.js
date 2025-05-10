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
      this.element.remove();
    });

    topPriorityButton.addEventListener('click', () => {
      this.toLearnList.insertBefore(this.element, this.toLearnList.firstElementChild);
    });

    understoodButton.addEventListener('click', () => {
      this.understoodList.appendChild(this.element);
      // TODO: remove or disable the remove and priority buttons
    });
  }
}

export { Card };
