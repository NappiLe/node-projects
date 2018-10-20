'use strict';

/*eslint-disable no-console */

const Suite= require('./suite.js');
const Card= require('./card.js');
const Deck=require('./deck.js');
const Hand=require('./hand.js');

let deck=Deck.createDeck();
console.log(deck.toString());
console.log('\n#######\n');
deck.shuffle();
console.log(deck.toString());
let myCards= new Hand();
console.log(`MyHand:${myCards}`);
myCards.addCard(deck.takeCard());
console.log(`MyHand: ${myCards} sum=${myCards.sum}`);
myCards.addCard(deck.takeCard());
console.log(`MyHand: ${myCards} sum=${myCards.sum}`);
for (let i=0; i<5; i++){
  myCards.addCard(deck.takeCard());
}
console.log(`MyHand:${myCards} sum=${myCards.sum}`);

console.log('\n###### doubledeck ######\n');

let doubleDeck=Deck.createDeck();
doubleDeck.addDeck(Deck.createDeck());
console.log(doubleDeck.toString());
doubleDeck.shuffle();
console.log('\n###### shuffle doubledeck ######\n');
console.log(doubleDeck.toString());
