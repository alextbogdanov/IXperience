import React, { useState } from 'react';
import IngredientInput from './IngredientInput';
import Recipe from '../models/Recipe';
import Ingredient from '../models/Ingredient';

export default function Form({
    createRecipe
}) {
    const [nameInput, setNameInput] = useState('');
    const [ingredients, setIngredients] = useState([new Ingredient('', '')]);
    const [instructionsInput, setInstructionsInput] = useState('');
    
    function onFormSubmit(e) {
        e.preventDefault();

        if(nameInput.trim() !== '' && instructionsInput.trim() !== '' && ingredients.length > 0) {
            let newRecipe = new Recipe(null, nameInput, ingredients, instructionsInput);
            createRecipe(newRecipe);

            setNameInput('');
            setIngredients([new Ingredient('', '')]);
            setInstructionsInput('');
        }
    }

    function addIngredientName(ingredient) {
        if(ingredient.name.trim() !== '') {
            const newIngredients = ingredients.map((i) => {
                return i.id === ingredient.id ? ingredient : i;
            });

            setIngredients(newIngredients);
        }
    }

    function addIngredientAmount(ingredient) {
        if(ingredient.amount.trim() !== '') {
            const newIngredients = ingredients.map((i) => {
                return i.id === ingredient.id ? ingredient : i;
            });

            setIngredients(newIngredients);
        }
    }

    function createNewIngredient() {
        const newIngredients = [...ingredients, new Ingredient('', '')];

        setIngredients(newIngredients);
    }

  return (
    <form onSubmit={onFormSubmit}>
        <div className="mt-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
        </div>
        <div className="mt-3">
            <label className="form-label">Ingredients</label>
            {
                ingredients.map((i) => {
                    return <IngredientInput key={i.id} ingredient={i} addIngredientName={addIngredientName} addIngredientAmount={addIngredientAmount} />
                })
            }
            <div className="text-center">
                <button className="btn btn-outline-warning btn-sm" type="button" onClick={createNewIngredient}>Add Ingredient</button>
            </div>
        </div>
        <div className="form-floating">
        <textarea className="form-control mt-3" placeholder="Leave a comment here" id="instructions" style={{height: '100px'}} value={instructionsInput} onChange={(e) => setInstructionsInput(e.target.value)}></textarea>
        <label htmlFor="instructions">Instructions</label>
        </div>
        <div className="d-grid col-6 mx-auto mt-4 mb-2">
        <button className="btn btn-primary" type="submit">Add Recipe</button>
        </div>
    </form>
  )
}
