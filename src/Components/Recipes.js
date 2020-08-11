import React from 'react';

const Recipe = React.memo(({ recipe }) => {
  return (
    <div className="col-sm-4 col-md-4 my-5">
      <div className="card h-100">
        <img className="card-img-top responsive" src={recipe.image} alt='recipe' />
        <div className="card-body">
          <h2 className="card-title">{recipe.label}</h2>
          <h6>Calories:{recipe.calories}</h6>
          <ul className="card-text">{recipe.ingredientLines.map((ingredient, index) => <li key={index}>{ingredient}</li>)}</ul>
        </div>
      </div>
    </div>
  );
})

const Recipes = React.memo(({ recipes }) => {
  return (
    <>
      <h1>Recipes found are</h1>
      <div className='row'>
        {recipes.map((recipe, index) => <Recipe key={index} recipe={recipe.recipe} />)}
      </div>
    </>
  )
})

export default Recipes;