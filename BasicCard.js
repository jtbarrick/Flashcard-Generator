//Front and back of flashcards
//"Define node module that exports a constructor for creating basic flashcards"
function BasicCard(front, back) {
	this.front = front;
	this.back = back;
};

module.exports = BasicCard;