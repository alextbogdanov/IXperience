import React, { useState } from "react"

import Spinner from "./Spinner"

export default function RecipeCard({
    recipe,
    deleteRecipe
}) {
	const [deleteLoading, setDeleteLoading] = useState(false);

	async function onRecipeDelete(recipe) {
		setDeleteLoading(true);
		try {
			await deleteRecipe(recipe);
		}
		catch(err) {
			console.log(err);
		}
		setDeleteLoading(false);
	}

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
            <button className="btn btn-danger" onClick={() => onRecipeDelete(recipe)}>
				{
					deleteLoading ?
					<Spinner /> :
					'Delete'
				}
			</button>
        </div>
    </div>
  )
}
