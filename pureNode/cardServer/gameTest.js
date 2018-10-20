const Deck= require('./deck.js');
const Hand=require('./hand.js');

/*eslint-disable no-console */
class Player{
  constructor(name, hand= new Hand()){
    this.name=name;
    this.hand=hand;
  }
  toString(){
    return `Player ${this.name} has hand ${this.hand}. Sum=${this.hand.sum}`;
  }
}// end of Player class

const players= new Map();
players.set('Leila', new Player('Leila'));
players.set('Pirkko', new Player('Pirkko'));

// deck is object, Deck is class
let deck=Deck.createDeck();
deck.shuffle();

let leila=players.get('Leila');
leila.hand.addCard(deck.takeCard());

let pirkko=players.get('Pirkko');
pirkko.hand.addCard(deck.takeCard());

for (let player of players.values()){
  console.log(`${player}`);
}

for(let i=0; i<5; i++){
  for (let player of players.values()){
    player.hand.addCard(deck.takeCard());
  }
}

for (let player of players.values()){
  console.log(`${player}`);
}

if (leila.hand.sum>pirkko.hand.sum){
  console.log('Leila won!');
}
else if (pirkko.hand.sum>leila.hand.sum){
  console.log('Pirkko won!');
}
else{
  console.log('It is a draw');
}
