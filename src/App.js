import React, { useState, useEffect } from 'react';
import Recipes from './Components/Recipes';
import Default from './Components/Default';
import Navbar from './Components/Navbar';

const App = React.memo((props) => {

  const APP_ID = '11250472';
  const APP_KEY = '6e67cb7a74a3afa5cd25a9ee7840f90e';
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [searchInNav, setSearchInNav] = useState(false)

  useEffect(() => setSearchInNav(recipes.length !== 0), [recipes]);

  const search = () => {
    setQuery(query.trim());
    if (query && query.trim() !== "") {
      fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(response => response.json())
        .then(data => { setRecipes(data.hits); if (data.hits.length === 0) alert(`No recipe found`) })
        .catch(error => alert('Limit exceeded'))
    } else {
      alert('No input');
    }
  };

  return (
    <div className="App">
      <Navbar query={query} setQuery={setQuery} searchInNav={searchInNav} search={search} />
      <div className="container">
        {(recipes.length === 0 && <Default setSearchInNav={searchInNav} query={query} setQuery={setQuery} search={search} />) || <Recipes recipes={recipes} />}
      </div>
    </div >
  );
})

export default App;