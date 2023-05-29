import { ApplicationData } from './core/applicationData.js';
import { CommandFactory } from './core/commandFactory.js';
import { Engine } from './core/engine.js';

const main = () => {
  // The following demonstrates the Composition pattern.
  const data = new ApplicationData();
  const commandFactory = new CommandFactory(data);
  const engine = new Engine(commandFactory);

  const commands = [
    'CreateCream All Inclusive 19.45 Men lavender,vanilla',
    'CreateCategory Creams',
    'AddToCategory Creams All',
    'AddToShoppingCart All',
    'CreateShampoo MyMan Trashy 10.99 Men 1000 EveryDay',
    'CreateShampoo Classy Trashy 35.23 Unisex 2500 EveryDay',
    'CreateToothpaste White Expensive 10.99 Men calcium,fluorid',
    'CreateCream Bache Smile 22.99 Women rose',
    'CreateCategory Shampoos',
    'CreateCategory Toothpastes',
    'AddToCategory Shampoos MyMan',
    'AddToCategory Shampoos Classy',
    'AddToCategory Toothpastes White',
    'AddToCategory Creams Bache',
    'AddToShoppingCart MyMan',
    'AddToShoppingCart White',
    'AddToShoppingCart Bache',
    'AddToShoppingCart Classy',
    'ShowCategory Shampoos',
    'ShowCategory Toothpastes',
    'ShowCategory Creams',
    'TotalPrice',
    'RemoveFromCategory Shampoos MyMan',
    'RemoveFromCategory Creams Bache',
    'RemoveFromCategory Shampoos MyMan',
    'RemoveFromCategory Creams All',
    'ShowCategory Shampoos',
    'ShowCategory Creams',
    'RemoveFromShoppingCart MyMan',
    'TotalPrice',
  ];

  const result = engine.run(commands);
  console.log(result);
};

main();
