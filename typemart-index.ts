import products from './typemart-products'; //imports from products.ts

//vvv creates variable from product.ts based on productName input vvv
const productName: string = 'shirt';
const product = products.filter(product => product.name === productName)[0]; 

//vvv sends message if the item can be pre-ordered vvv
if (product.preOrder === 'true') {
  console.log(`Hello! Thank you for your order. We will send you a message when your ${product.name} is on the way!`);
} 

//vvv variables for receipt vvv
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = '1 Newbie Ave., Albany, New York 10101';

//vvv does the item qualify for free shipping? vvv
if (Number(product.price) > 25) {
  console.log(`Great news! Your ${product.name} qualifies for free shipping!`);
  shipping = 0;
} else {
  shipping = 5;
} 

//vvv find and calculate NYC buyer tax vvv
if (shippingAddress.match('New York City')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

//vvv calc total vvv
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

//vvv log receipt vvv
console.log(`Item ordered: ${product.name}`);
console.log(`Ship to: ${shippingAddress}`);
console.log('- - - - - - - - - -');
console.log(`Item price:  ${product.price}`);
console.log(`Tax:         ${taxTotal}`);
console.log(`Shipping:    ${shipping}`);
console.log('- - - - - - - - - -');
console.log(`Total:       ${total}`);
