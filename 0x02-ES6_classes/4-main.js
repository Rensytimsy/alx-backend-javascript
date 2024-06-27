import Pricing from './4-pricing';
import Currency from './3-currency5-building.js';

const p = new Pricing(100, new Currency('EUR', 'Euro'));
console.log(p);
console.log(p.displayFullPrice());
