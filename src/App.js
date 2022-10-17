import React,{useState} from 'react';
import './App.css';
import RecipeList from './components/ListComponents/recipeList'
import RecipeDetail from './components/detailComponent/recipeDetail'
const recipes = [
  {
    author: "Jim",
    name: "Chicken Curry",
    description: "Delicious spicy chicken curry"
  },
  {
    author: "Aravind",
    name: "Hamburger",
    description: "Juicy burger with toppings and a soft bun",
  }
]

function App() {
  const [selectedRecipe, setSelectedrecipe] = useState(recipes[0]);
  return (
    <div className="App" >
      <div className='listContainer'>
       <h2 className='bold'>Recipe List</h2> 
      <RecipeList changeRecipe={(index)=>setSelectedrecipe(recipes[index])} recipes={recipes} ></RecipeList>
      </div>
      <div className='detailConatiner'>
      <h2 className='bold'>Recipe Detail</h2> 
      <RecipeDetail recipe={selectedRecipe} ></RecipeDetail>
      </div>
    </div>
  );
}

export default App;
