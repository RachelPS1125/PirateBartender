function Bartender(questions){
	FoodPreparer.call(this, questions);
}
Bartender.prototype = new FoodPreparer();
Bartender.prototype.constructor = Bartender;