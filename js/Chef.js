function Chef(questions){
	FoodPreparer.call(this, questions);
}
Chef.prototype = new FoodPreparer();
Chef.prototype.constructor = Chef;