/*
 *
 *  L - Liskov substitution principle:
 *  Se Φ(x) é uma propriedade demonstravel dos objetos x de tipo T
 *  então Φ(y) deve ser verdadeiro para objetos y de tipos S onde
 *  S é um subtipo de T.
 *
 *  Ou seja:
 *  Subtipos precisam ser substituiveis por seus tipos de base.
 *
 *  exemplo: Se meu programa espera um Animal, algo do tipo cachorro
 *  (que herda de Animal) deve servir como qualquer outro Animal.
 *
 */

import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';
import { NoDiscount } from './entities/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.93423));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
