import React, { useState, useEffect } from 'react';
import Form from "../components/Form";
import RecipeCard from "../components/RecipeCard";
import recipeService from '../services/recipe.service';

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    readRecipes();
  }, [])

  async function readRecipes() {
    try {
      let initRecipes = await recipeService.readRecipes();

      setRecipes(initRecipes);
    } catch(err) {
      console.log(err);
    }
  }
  
  async function createRecipe(recipe) {
    try {
      recipe = await recipeService.addRecipe(recipe);

      const newRecipes = [...recipes, recipe];
      setRecipes(newRecipes);
    } catch(err) {
      console.log(err);
    }
  }

  async function deleteRecipe(recipe) {
    try {
      await recipeService.deleteRecipe(recipe);

      const newRecipes = recipes.filter((r) => {
        return recipe.id !== r.id;
      });

      setRecipes(newRecipes);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="card p-5">
        <h1>Recipe List</h1>
        <hr />
        <Form createRecipe={createRecipe} />
        <hr className="mb-5" />
        <div>
          {recipes.map((r) => {
            return <RecipeCard key={r.id} recipe={r} deleteRecipe={deleteRecipe} />
          })}
        </div>
      </div>
    </div>
  );
}
