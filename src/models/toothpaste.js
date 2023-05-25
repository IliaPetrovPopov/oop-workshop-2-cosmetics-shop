import { Product } from './product.js';
import { Gender } from './gender.js';

export class Toothpaste extends Product {

  #ingredients;

  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {string} ingredients
  */
  constructor(name, brand, price, gender, ingredients) {
    super(name, brand, price, gender);

    if (!ingredients) {
      throw new Error('Cannot pass invalid value!');
    }

    if (typeof ingredients !== 'string') {
      throw new Error('Ingredients must be string!');
    }

    this.#ingredients = ingredients;
  }

  get ingredients() {
    return this.#ingredients;
  }

  print() {
    return this.additionalInfo();
  }

  additionalInfo() {
  }
}