import { createCardElement } from '../dom/card.js';

class Card {
  constructor({ title, description }) {
    this.element = createCardElement({ title, description });
    this.toLearnList = document.querySelector('.to-learn-stickies');
    this.understoodList = document.querySelector('.understood-stickies');

    this.render();
  }

  render() {
    this.toLearnList.appendChild(this.element);
  }
}

export { Card };
