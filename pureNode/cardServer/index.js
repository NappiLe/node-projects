'use strict';

/*eslint-disable no-console */

const Suite= require('./suite.js');
const Card= require('./card.js');
const Deck=require('./deck.js');

// There are move inside the Suite class
// let spades= new Suite('spades', Suite.SYMBOL.SPADES_SYMBOL, Suite.COLOR.BLACK);
//
// console.log(spades.toString());
//
// let hearts= new Suite('hearts', Suite.SYMBOL.HEARTS_SYMBOL, Suite.COLOR.RED);
// console.log(hearts.toString());

let cardA=new Card(Suite.SPADES,13);
let cardB=new Card(Suite.HEARTS,5);
console.log(cardA.toString());
console.log(cardB.toString());

let deck=new Deck();

console.log('deck:',deck.toString());
deck.addCard(cardA);
console.log(`Deck: ${deck}`);
deck.addCard(cardB);
console.log(deck.toString());
deck.shuffle();
console.log(deck.toString());
console.log(Suite.SPADES===Suite.SPADES);
console.log(Suite.SPADES.name);
// console.log(Suite.HEARTS.symbol=Suite.CLUBS.symbol);
console.log(Suite.HEARTS.symbol);
console.log(`Suite:${Suite.SPADES.symbol}`);
