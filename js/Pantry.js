function Pantry(){
	this.sections = {};
}
Pantry.prototype.storeIngredient=function(taste, ingredient){
	if(this.sections[taste]){
		this.sections[taste].push(ingredient);
	} else {
		this.sections[taste] = [ingredient];
	}
}

