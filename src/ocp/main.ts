/*
 *
 *  O - Open/close principle:
 *  Entidades devem estar abertas para extensão, mas fechadas para modificação.
 *  na pratica, você deve evitar ter que mudar o código para implementar alguma função nova,
 *  por exemplo, dar um desconto no carrinho em dias diferentes, não se deve ficar alterando
 *  a função de desconto diretamente no source code, mas sim implementa-la de uma maneira que
 *  caso seja necessária sua customização, deve ser recebida por parametros para dar a possibilidade
 *  para o metodo se modificar, utilizando herança para repasar parametros ou utilizando injeção de
 *  dependencias, podendo essas ser utilizadas simultaneamente.
 *  Nesse exemplo, não é mais nescessário alterar o shoppcart, somente adicionar novos metodos em
 *  discounts, evitando tambem novos testes em classes já criadas anteriormente.
 *  (O padrão de projeto utilizado apra discount foi 'extrategy' do GOF)
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
