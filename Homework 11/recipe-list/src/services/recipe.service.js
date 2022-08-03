import { collection, doc, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Recipe from "../models/Recipe";

class RecipeService {
    constructor() {
        this.collection = 'recipes';
    }

    async readRecipes() {
        let recipes = [];

        const querySnapshot = await getDocs(collection(db, this.collection));
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            let recipe = new Recipe(doc.id, data.name, data.ingredients, data.instructions);

            recipes.push(recipe);
        });

        return recipes;
    }

    async addRecipe(recipe) {
        const docRef = await addDoc(collection(db, this.collection), {
            id: null,
            name: recipe.name,
            ingredients: JSON.parse(JSON.stringify(recipe.ingredients)),
            instructions: recipe.instructions
        });

        recipe.id = docRef.id;
        return recipe;
    }

    async deleteRecipe(recipe) {
        const docRef = await deleteDoc(doc(db, this.collection, recipe.id));

        return docRef;
    }
}

const recipeService = new RecipeService();
export default recipeService;