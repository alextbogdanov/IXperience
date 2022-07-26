import React from 'react'

export default function IngredientInput() {
  return (
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Ingredient" />
        <span class="input-group-text"></span>
        <input type="text" class="form-control" placeholder="Amount" />
    </div>
  )
}
