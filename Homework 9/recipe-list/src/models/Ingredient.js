export default class Ingredient {
    static id = 0;

    constructor(id, name, amount) {
        this.id = Ingredient.id;
        this.name = name;
        this.amount = amount;

        Ingredient.id++;
    }
}