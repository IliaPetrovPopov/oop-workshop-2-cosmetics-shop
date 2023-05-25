import { Product } from './product.js';
import { Usage } from './usage.js';
import { Gender } from './gender.js';

export class Shampoo extends Product {

  #milliliters;
  #usage;

  static #MIN_MILLILITERS = 0;

  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {number} milliliters
  * @param {Usage} usage
  */
  constructor(name, brand, price, gender, milliliters, usage) {
    super(name, brand, price, gender);

    if (milliliters < Shampoo.#MIN_MILLILITERS) {
      throw new Error(`Milliliters cannot be less than ${Shampoo.#MIN_MILLILITERS}`);
    }

    this.#milliliters = milliliters;

    if (!Usage.hasOwnProperty(usage)) {
      throw new Error('Such usage type doesn\'t exist');
    }

    this.#usage = usage;
  }

  get milliliters() {
    return this.#milliliters;
  }

  get usage() {
    return this.#usage;
  }

  print() {
    return this.additionalInfo();
  }

  additionalInfo() {
  }
}
