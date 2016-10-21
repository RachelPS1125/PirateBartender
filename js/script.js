$(document).ready(function(){

	var rum = new Ingredient('Glug of Rum');
	var whisky = new Ingredient('Slug of Whisky');
	var gin = new Ingredient('Splash of Gin');
	var olive = new Ingredient('Olive on a Stick');
	var salt = new Ingredient('Salt Dusted Rim');
	var bacon = new Ingredient('Rasher of Bacon');
	var bitters = new Ingredient('Shake of Bitters');
	var tonic = new Ingredient('Splash of tonic');
	var lemon = new Ingredient('Twist of Lemon Peel');
	var sugar = new Ingredient('Sugar Cube');
	var honey = new Ingredient('Spoonful of Honey');
	var cola = new Ingredient('Splash of Cola');
	var orange = new Ingredient('Slice of Orange');
	var cassis = new Ingredient('Dash of Cassis');
	var cherry = new Ingredient('Cherry on Top');

	var piratePantry = new Pantry();

	piratePantry.storeIngredient('strong', rum.name);
	piratePantry.storeIngredient('strong', whisky.name);
	piratePantry.storeIngredient('strong', gin.name)
	piratePantry.storeIngredient('salty', olive.name)
	piratePantry.storeIngredient('salty', salt.name)
	piratePantry.storeIngredient('salty', bacon.name)
	piratePantry.storeIngredient('bitter', bitters.name)
	piratePantry.storeIngredient('bitter', tonic.name)
	piratePantry.storeIngredient('bitter', lemon.name)
	piratePantry.storeIngredient('sweet', sugar.name)
	piratePantry.storeIngredient('sweet', honey.name)
	piratePantry.storeIngredient('sweet', cola.name)
	piratePantry.storeIngredient('fruity', orange.name)
	piratePantry.storeIngredient('fruity', cassis.name)
	piratePantry.storeIngredient('fruity', cherry.name)
	
	var pirateQuestions = [
		new Question('Do ye like yer drinks strong?', 'strong'),
		new Question('Do ye like it with a salty tang?', 'salty'),
		new Question('Are ye a lubber who likes it bitter?', 'bitter'),
		new Question('Would ye like a bit of sweetness with yer poison?', 'sweet'),
		new Question('Are ye one for a fruity finish?', 'fruity'),
	];

	var bartender = new Bartender(pirateQuestions);
	var questionObj = bartender.askQuestion();
	$('.question-text').text(questionObj.question);
	$('input[name="preference"]').click(function(event){
		if ($(this).val() === 'yes'){
			bartender.setLikes(questionObj.taste);
		}
		questionObj = bartender.askQuestion();
		if(!questionObj){
			$('.question').hide();
			showRecipe(bartender.makeDrink(piratePantry));
		} else {
			$('.question-text').text(questionObj.question);
		}
	});
	function showRecipe(ingredients){
		console.log(ingredients);
		ingredients.forEach(function(ingredient){
			$('.drinkRecipe').append('<li class="ingredient">'+ingredient+'</li>');
		})
	}
})