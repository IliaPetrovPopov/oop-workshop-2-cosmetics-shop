import { ApplicationData } from '../core/applicationData.js';
import { Product } from '../models/product.js';
import { try_parse_float, try_parse_int, validateParamsCount } from './validationHelpers.js';

export class CreateShampooCommand {
    #params;
    #appData;

    /**
    * @param {string[]} params
    * @param {ApplicationData} appData
    */
    constructor(params, appData) {
      validateParamsCount(params, 6);

      this.#params = params;
      this.#appData = appData;
    }

    execute() {
      const [name, brand, price, gender, usage, milliliters] = this.#params;

      this.#appData.createShampoo(name, brand, try_parse_float(price), gender, usage, milliliters);

      return `Shampoo with name ${name} was created!`;
    }
}
