function Bartender(questions){
	this.questions = questions;
	this.currentQuestion = 0;
	this.preferences = []
}
Bartender.prototype.askQuestion = function(){
	if(this.currentQuestion<this.questions.length){
		return this.questions[this.currentQuestion++];
	}else{
		console.log('test');
		return false
	}
}
Bartender.prototype.setLikes = function(taste){
	this.preferences.push(taste);
	console.log(this.preferences);
}
Bartender.prototype.makeDrink = function(pantry){
	var drinkIngredients = []
	for(var i = 0; i<this.preferences.length; i++){
		var preference = this.preferences[i];
		var ingredients = pantry.sections[preference];
		var randomIngredient = ingredients[Math.floor(Math.random()*ingredients.length)]
		drinkIngredients.push(randomIngredient); 
		console.log(randomIngredient, ingredients);
	}
	return drinkIngredients;
}