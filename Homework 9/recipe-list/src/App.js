import "bootstrap/dist/css/bootstrap.css"
import Form from "./components/Form";
import RecipeCard from "./components/RecipeCard";

function App() {
  return (
    <div className="container mt-5 mb-5">
      <div className="card p-5">
        <h1>Recipe List</h1>
        <hr />
        {/* FORM */}
        <Form />
        <hr className="mb-5" />
        {/* RECIPE CARDS */}
        <div>
          {/* CARD */}
          <RecipeCard />
        </div>
      </div>
    </div>
  );
}

export default App;
