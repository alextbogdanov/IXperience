import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/Form";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [recipes, setRecipes] = useState([]);
  
  function createRecipe(recipe) {
    const newRecipes = [...recipes, recipe];
    setRecipes(newRecipes);
  }

  function deleteRecipe(recipe) {
    const newRecipes = recipes.filter((r) => {
      return recipe.id !== r.id;
    })

    setRecipes(newRecipes);
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

export default App;
