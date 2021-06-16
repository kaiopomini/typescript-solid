/*
 *
 *  S - Simple Responsability Principle:
 *  Define que um classe deve ter apenas uma responsabilidade
 *  maneiras de identificar responsabilidades podem ser de acordo com a função, como exemplos a
 *  função de envio de mensagens, persistencia no banco de dados, as entidades e a quem cada classe
 *  está subordinada (setor), por exemplo ao RH e Marketing
 *
 */

import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.93423));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
