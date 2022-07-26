import React, { useState } from 'react';

export default function IngredientInput({
    ingredient,
    addIngredientName,
    addIngredientAmount
}) {
  
  const [ingredientName, setIngredientName] = useState(ingredient.name);
  const [ingredientAmount, setIngredientAmount] = useState(ingredient.amount);

  function onNameChange(name) {
    ingredient.name = name;

    setIngredientName(name);
    addIngredientName(ingredient);
  }

  function onAmountChange(amount) {
    ingredient.amount = amount;
    
    setIngredientAmount(amount);
    addIngredientAmount(ingredient);
  }

  return (
    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Ingredient name" value={ingredientName} onChange={(e) => onNameChange(e.target.value)} />
        <input type="text" className="form-control" placeholder="Amount" value={ingredientAmount} onChange={(e) => onAmountChange(e.target.value)} />
    </div>
  )
}
