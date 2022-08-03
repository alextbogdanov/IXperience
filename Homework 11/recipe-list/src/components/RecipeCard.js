import React from 'react';

export default function RecipeCard({
    recipe,
    deleteRecipe
}) {
  return (
    <div className="card mb-4">
        <div className="card-body">
            <h3 className="card-title">{recipe.name}</h3>
            <p className="card-text">{recipe.instructions}</p>
        </div>
        <ul className="list-group list-group-flush">
            {recipe.ingredients.map((ingredient) => {
                return <li key={ingredient.id} className="list-group-item">{ingredient.name} | {ingredient.amount}</li>
            })}
        </ul>
        <div className="card-body">
            <button className="btn btn-danger" onClick={() => deleteRecipe(recipe)}>Delete</button>
        </div>
    </div>
  )
}
