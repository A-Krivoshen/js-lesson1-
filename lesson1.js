'use strict';

var named,price,sale,amtItems,discount,pricePerUnit,discountedPrice;

named = 'Телепорт бытовой VZHIH-101';
price = 10000;

console.log(`Есть в наличии: "${named}"`);
console.log(`Стоимость товара ${price} Q`);

sale = 0.1;
amtItems = 2;

discount = price * sale;
pricePerUnit  = price - discount;
discountedPrice = pricePerUnit * amtItems;

console.log(`Цена покупки составит ${discountedPrice} Q`);
