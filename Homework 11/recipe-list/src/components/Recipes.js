import RecipeCard from './RecipeCard'

export default function Recipes({ recipes, deleteRecipe }) {
  return (
    <div>
        {recipes.map((r) => {
        return <RecipeCard key={r.id} recipe={r} deleteRecipe={deleteRecipe} />
        })}
    </div>
  )
}
