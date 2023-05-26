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
    this.#ingredients = ingredients;
  }

  /**
   * Validation for ingredients.
   * @param {string} ingredients Ingredients to check.
   */

  get ingredients() {
    return this.#ingredients;
  }

  print() {
    return this.additionalInfo();
  }

  additionalInfo() {
  }
}
