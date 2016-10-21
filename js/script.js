$(document).ready(function(){

	var rum = new Ingredient('Glug of Rum');
	var whisky = new Ingredient('Slug of Whisky');
	var gin = new Ingredient('Splash of Gin');
	var olive = new Ingredient('Olive on a Stick');
	var salt = new Ingredient('Salt Dusted Rim');
	var bacon = new Ingredient('Rasher of Bacon');
	var bitters = new Ingredient('Shake of Bitters');
	var tonic = new Ingredient('Splash of Tonic');
	var lemon = new Ingredient('Twist of Lemon Peel');
	var sugar = new Ingredient('Sugar Cube');
	var honey = new Ingredient('Spoonful of Honey');
	var cola = new Ingredient('Splash of Cola');
	var orange = new Ingredient('Slice of Orange');
	var cassis = new Ingredient('Dash of Cassis');
	var cherry = new Ingredient('Cherry on Top');
	var bison = new Ingredient('Bison Patty');
	var beef = new Ingredient('Beef Patty');
	var turkey = new Ingredient('Turkey Patty');
	var mushroom = new Ingredient('Portabella Mushroom Cap');
	var veggie = new Ingredient('Veggie Patty');
	var bean = new Ingredient('Black Bean Patty');
	var american = new Ingredient('American Cheese');
	var cheddar = new Ingredient('Cheddar Cheese');
	var provolone = new Ingredient('Provolone Cheese');
	var onions = new Ingredient('Grilled Onions');
	var peppers = new Ingredient('Grilled Onions');
	var mushrooms = new Ingredient('Grilled Mushrooms');
	var tomato = new Ingredient('Tomato');
	var romane = new Ingredient('Romane Lettuce');
	var spinach = new Ingredient('Spinach');
	var iceberg = new Ingredient('Iceberg Lettuce');

	var piratePantry = new Pantry();

	piratePantry.storeIngredient('meat', bison.name);
	piratePantry.storeIngredient('meat', beef.name);
	piratePantry.storeIngredient('meat', turkey.name);
	piratePantry.storeIngredient('vegetarian', mushroom.name);
	piratePantry.storeIngredient('vegetarian', veggie.name);
	piratePantry.storeIngredient('vegetarian', bean.name);
	piratePantry.storeIngredient('cheese', american.name);
	piratePantry.storeIngredient('cheese', cheddar.name);
	piratePantry.storeIngredient('cheese', provolone.name);
	piratePantry.storeIngredient('grilled', onions.name);
	piratePantry.storeIngredient('grilled', peppers.name);
	piratePantry.storeIngredient('grilled', mushrooms.name);
	piratePantry.storeIngredient('lettuce', romane.name);
	piratePantry.storeIngredient('lettuce', spinach.name);
	piratePantry.storeIngredient('lettuce', romane.name);
	piratePantry.storeIngredient('lettuce', iceberg.name);
	piratePantry.storeIngredient('tomato', tomato.name);
	piratePantry.storeIngredient('strong', rum.name);
	piratePantry.storeIngredient('strong', whisky.name);
	piratePantry.storeIngredient('strong', gin.name);
	piratePantry.storeIngredient('salty', olive.name);
	piratePantry.storeIngredient('salty', salt.name);
	piratePantry.storeIngredient('salty', bacon.name);
	piratePantry.storeIngredient('bitter', bitters.name);
	piratePantry.storeIngredient('bitter', tonic.name);
	piratePantry.storeIngredient('bitter', lemon.name);
	piratePantry.storeIngredient('sweet', sugar.name);
	piratePantry.storeIngredient('sweet', honey.name);
	piratePantry.storeIngredient('sweet', cola.name);
	piratePantry.storeIngredient('fruity', orange.name);
	piratePantry.storeIngredient('fruity', cassis.name);
	piratePantry.storeIngredient('fruity', cherry.name);
	
	var pirateQuestions = [
		new Question('Do ye like yer drinks strong?', 'strong'),
		new Question('Do ye like it with a salty tang?', 'salty'),
		new Question('Are ye a lubber who likes it bitter?', 'bitter'),
		new Question('Would ye like a bit of sweetness with yer poison?', 'sweet'),
		new Question('Are ye one for a fruity finish?', 'fruity')
	];

	var chefQuestions = [
		new	Question('Would you like a meat patty?', 'meat'),
		new Question('Would you like a veggie patty?', 'vegetarian'),
		new Question('Do you like cheese on your burger?', 'cheese'),
		new Question('Would you like grilled vegetables on your burger?', 'grilled'),
		new	Question('Would you like lettuce on your burger?', 'lettuce'),
		new Question('Would you like tomato on your burger?', 'tomato')
	]

	var bartender = new Bartender(pirateQuestions);
	var chef = new Chef(chefQuestions);
	var questionObj = bartender.askQuestion();
	var foodPreparer = bartender;
	$('.question-text').text(questionObj.question);
	$('input[name="preference"]').click(function(event){
		if ($(this).val() === 'yes'){
			foodPreparer.setLikes(questionObj.taste);
		}
		questionObj = foodPreparer.askQuestion();
		if(!questionObj){
			$('.question').hide();
			showRecipe(foodPreparer.makeItem(piratePantry));
			if(foodPreparer instanceof Bartender){
				$('.want-burger').show();
				$('.offer-burger').text('Would you like a burger with your drink?');
			}
		} else {
			$('.question-text').text(questionObj.question);
		}
	});
	$('input[name="want"]').click(function(event){
		if ($(this).val() === 'yes'){
			foodPreparer = chef;
			$('.question').show();
			$('.want-burger').hide();
			questionObj = foodPreparer.askQuestion();
			$('.question-text').text(questionObj.question);
		}
	})
	function showRecipe(ingredients, recipe){
		ingredients.forEach(function(ingredient){
			$('.drink-recipe').append('<li class="ingredient">'+ingredient+'</li>');
		})
	}
})