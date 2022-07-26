export default class Recipe {
    static id = 0;

    constructor(id, name, ingredients, instructions) {
        this.id = Recipe.id;
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;

        Recipe.id++;
    }
}