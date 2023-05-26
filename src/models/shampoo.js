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
    this.millilitersValidation(milliliters);
    this.usageValidation(usage);

    this.#milliliters = milliliters;
    this.#usage = usage;
  }

  /**
   * Validation for milliliters.
   * @param {number} milliliters Milliliters to check.
   */
  millilitersValidation(milliliters) {
    if (milliliters < Shampoo.#MIN_MILLILITERS) {
      throw new Error('Milliliters cannot be negative number!');
    }
  }

  /**
   * Validation for usage.
   * @param {string} usage Usage to check.
   */
  usageValidation(usage) {
    if (!Usage.hasOwnProperty(usage)) {
      throw new Error('Such usage doesn\'n exist!');
    }
  }

  /**
   * @type {number}
   */
  get milliliters() {
    return this.#milliliters;
  }

  /**
   * @type {Usage}
   */
  get usage() {
    return this.#usage;
  }

  additionalInfo() {
  }
}
