import { createCardElement } from '../dom/card.js';

class Card {
  constructor({ title, description }) {
    this.element = createCardElement({ title, description });
  }
}

export { Card };
