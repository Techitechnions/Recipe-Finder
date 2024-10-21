import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

const recipeData = [
  { id: 1, name: "Spaghatti", category: "Italian" },
  { id: 1, name: "Chicken Curry", category: "Indian" },
  { id: 1, name: "Sushi", category: "Japanese" },
  { id: 1, name: "Tacos", category: "Mexican" },
  { id: 1, name: "Pad Thai", category: "Thai" },
  { id: 1, name: "Paneer Butter Masala", category: "Indian" },
];

function App() {
  const [recipes, setRecipes] = useState(recipeData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");


  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

   const handleCategoryFilter = (event) => {
     setFilterCategory(event.target.value);
   };
  
  const filteredRecipes = recipes.filter((recipe)=> {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
    .filter((recipe) => {
      return filterCategory ? recipe.category === filterCategory : true;
  })

  return (
    <div className="container">
      <h1>Recipe Finder</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearch={handleSearch}
        filterCategory={filterCategory}
        onFilterCategory={handleCategoryFilter}
      /> 
      <RecipeList recipes={ filteredRecipes} />
    </div>
  );
}

export default App;
