import { Product } from './product.js';
import { Gender } from './gender.js';

export class Toothpaste extends Product {

  /** Ingredients of toothpaste. */
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

  ingredientsValidation(ingredients) {
    if (!ingredients) {
      throw new Error('Cannot pass invalid value!');
    }

    if (typeof ingredients !== 'string') {
      throw new Error('Ingredients must be string!');
    }
  }

  /**
   * @type {string}
   */
  get ingredients() {
    return this.#ingredients;
  }

  /**
   * @return {string}
   */
  additionalInfo() {
    return ` #Ingredients: ${this.ingredients}`;
  }
}
