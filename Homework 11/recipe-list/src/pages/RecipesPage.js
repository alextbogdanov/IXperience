import React, { useState, useEffect } from 'react';

import recipeService from '../services/recipe.service';

import Form from "../components/Form";
import Recipes from '../components/Recipes';
import Spinner from '../components/Spinner';

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    readRecipes();
  }, [])

  async function readRecipes() {
    setPageLoading(true);
    try {
      let initRecipes = await recipeService.readRecipes();

      setRecipes(initRecipes);
    } catch(err) {
      console.log(err);
    }
    setPageLoading(false);
  }
  
  async function createRecipe(recipe) {
    recipe = await recipeService.addRecipe(recipe);

    const newRecipes = [...recipes, recipe];
    setRecipes(newRecipes);
  }

  async function deleteRecipe(recipe) {
    await recipeService.deleteRecipe(recipe);

    const newRecipes = recipes.filter((r) => {
      return recipe.id !== r.id;
    });

    setRecipes(newRecipes);
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="card p-5">
        <h1>Recipe List</h1>
        <hr />
        <Form createRecipe={createRecipe} />
        <hr className="mb-5" />
        {
          pageLoading ?
          <div className="text-center"><Spinner /></div> :
          <Recipes recipes={recipes} deleteRecipe={deleteRecipe} />
        }
      </div>
    </div>
  );
}
