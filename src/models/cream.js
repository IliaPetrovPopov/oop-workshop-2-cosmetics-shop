import { Product } from './product.js';
import { Scent } from './scent.js';

export class Cream extends Product {
  /** Scent of cream. */
    #scent;

    static #MIN_SYMBOLS = 3;
    static #MAX_SYMBOLS = 15;

    /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {Scent} scent
  */

    constructor(name, brand, price, gender, scent) {
      super(name, brand, price, gender);
      this.scentValidation(scent);
    }

    /**
     * Validation for name.
     * @param {string} newName Name to validate.
     */
    nameValidation(newName) {
      if (!newName) {
        throw new Error('Invalid name!');
      }

      if (newName.length < Cream.#MIN_SYMBOLS || newName.length > Cream.#MAX_SYMBOLS) {
        throw new Error(`Product name length must be between ${Cream.#MIN_SYMBOLS} and ${Cream.#MAX_SYMBOLS}`);
      }
    }

    /**
     * Validation for brand.
     * @param {string} newBrand Brand to validate.
     */
    brandValidation(newBrand) {
      if (!newBrand) {
        throw new Error('Invalid brand!');
      }

      if (newBrand.length < Cream.#MIN_SYMBOLS || newBrand.length > Cream.#MAX_SYMBOLS) {
        throw new Error(`Product brand length must be between ${Cream.#MIN_SYMBOLS} and ${Cream.#MAX_SYMBOLS}`);
      }
    }

    /**
     * Validation for scent.
     * @param {string} newScent Scent to validate
     */
    scentValidation(newScent) {
      if (!newScent) {
        throw new Error('Invalid scent!');
      }

      if (typeof newScent !== 'string') {
        throw new Error('Scent always must be string!');
      }

      this.#scent = newScent;
    }

    /**
     * @type {Scent}
     */
    get scent() {
      return this.#scent;
    }

    /**
     * @return {string}
     */
    additionalInfo() {
      return ` #Scent: ${this.#scent}`;
    }
}
