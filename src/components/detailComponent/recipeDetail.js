import React from 'react';

function RecipeDetail(props) {
  

  return (
    <div className='list'>
      <ul>
          <h2>Author of recipe is {props.recipe.author}</h2>
         <h3>  description: {props.recipe.description}</h3>
          </ul>
    </div>
  );
}

export default RecipeDetail;
