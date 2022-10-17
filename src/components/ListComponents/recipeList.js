import React from 'react';

function RecipeList(props) {
  console.log(props)
  const list = props.recipes.map((product,index) => <li className='hover' onClick={()=>props.changeRecipe(index)} key={product.name}>{product.name}</li>)

  return (
    <div className='list'>
      {list}
    </div>
  );
}

export default RecipeList;
