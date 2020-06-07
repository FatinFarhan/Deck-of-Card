Deck = [];

const suiteName = ["spades", "hearts", "diamonds", "clubs"];
const faceValue = [
	"A",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"J",
	"Q",
	"K",
];

// class Card {
// 	constructor(hearts, K) {
// 		this.suite = hearts;
// 		this.value = K;
// 	}
// 	printCard() {
// 		console.log(this.value + "  of " + this.suite);
// 	}
// }

createDeck(Deck);
shuffleDeck(Deck);
printDeck(Deck);

function Card(hearts, K) {
	this.suite = hearts;
	this.value = K;
}

function createDeck(deck) {
	for (i = 0; i < 4; i++) {
		for (j = 0; j < 13; j++) {
			deck[13 * i + j] = new Card(suiteName[i], faceValue[j]);
		}
	}
}

function shuffleDeck(deck) {
	for (i = 0; i < 52; i++) {
		var r = i + Math.floor(Math.random() * (52 - i));
		var temp = deck[r];
		deck[r] = deck[i];
		deck[i] = temp;
	}
}

function printDeck(deck) {
	for (i = 0; i < 52; i++) {
		console.log(deck[i].value + "  of " + deck[i].suite);
	}
}
