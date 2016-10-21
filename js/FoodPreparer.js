function FoodPreparer(questions){
	this.questions = questions;
	this.currentQuestion = 0;
	this.preferences = []
}
FoodPreparer.prototype.askQuestion = function(){
	if(this.currentQuestion<this.questions.length){
		return this.questions[this.currentQuestion++];
	}else{
		console.log('test');
		return false
	}
}
FoodPreparer.prototype.setLikes = function(type){
	this.preferences.push(type);
	console.log(this.preferences);
}
FoodPreparer.prototype.makeItem = function(pantry){
	var finalIngredients = []
	for(var i = 0; i<this.preferences.length; i++){
		var preference = this.preferences[i];
		var ingredients = pantry.sections[preference];
		console.log(ingredients.length);
		var randomIngredient = ingredients[Math.floor(Math.random()*ingredients.length)]
		finalIngredients.push(randomIngredient); 
	}
	return finalIngredients;
}