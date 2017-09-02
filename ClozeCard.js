var inquirer = require('inquirer');
var BasicCard = require('./BasicCard.js');
var cardDrawn;
//var questions = require('./questions');

function ClozeCard(full, cloze, partial) {
	this.full = full;
	this.cloze = cloze;
	this.partial = function() {
		if (this.cloze === true) {
			response.write(Replace(txt, cloze, '...')
				)};
	}
};

function getQuestion(card) {
	if (card.type === "BasicCard") {
		return cardDrawn.front;
	} else if (card.type === "ClozeCard") {
		return this.partial;
	};
};

// var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// // console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States."
// console.log(firstPresidentCloze.partial); 

// // "George Washington was the first president of the United States."
// console.log(firstPresidentCloze.full); 

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");