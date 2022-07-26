import React from 'react'

export default function RecipeCard() {
  return (
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">Example recipe</h3>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-danger ms-2">Delete</button>
        </div>
    </div>
  )
}
