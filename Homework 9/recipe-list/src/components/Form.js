import React from 'react'
import IngredientInput from './IngredientInput';

export default function Form() {
  return (
    <form>
        <div className="mt-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" />
        </div>
        {/* INGREDIENTS */}
        <div className="mt-3">
            <label className="form-label">Ingredients</label>
            <IngredientInput />
            <div className="text-center">
                <button className="btn btn-outline-warning btn-sm">Add Ingredient</button>
            </div>
        </div>
        <div class="form-floating">
        <textarea className="form-control mt-3" placeholder="Leave a comment here" id="instructions" style={{height: '100px'}}></textarea>
        <label for="instructions">Instructions</label>
        </div>
        <div class="d-grid col-6 mx-auto mt-4 mb-2">
        <button class="btn btn-primary" type="submit">Add Recipe</button>
        </div>
    </form>
  )
}
