function Pantry(){
	this.sections = {};
}
Pantry.prototype.storeIngredient=function(type, ingredient){
	if(this.sections[type]){
		this.sections[type].push(ingredient);
	} else {
		this.sections[type] = [ingredient];
	}
}

