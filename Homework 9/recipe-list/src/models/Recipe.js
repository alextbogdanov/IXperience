export default class Recipe {
    static id = 0;

    constructor(name, ingredients, instructions) {
        this.id = Recipe.id;
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;

        Recipe.id++;
    }
}