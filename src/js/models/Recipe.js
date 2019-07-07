export default class Recipe {
    constructor(recipe){
        this.title = recipe.label;
        this.ingredients = recipe.ingredients;
        this.img = recipe.image;
        this.url = recipe.url;
        this.source = recipe.source;
    }
}