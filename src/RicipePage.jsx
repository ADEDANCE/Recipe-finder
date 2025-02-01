import React, { useState } from 'react'

const API_KEY = "aaa825c706f24d959e58185fc7ae9601"; 


const RicipePage = () => {
    
 const [ingredients, setIngrdient] = useState("");
 const [recipes,setRecipe] = useState([]);

 const fechRecipes  = async () => {
    if (!ingredients.trim()) return;

    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&apiKey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();  
        setRecipe(data);
    } catch (error) { 
        console.error("Error fetching recipes:", error);
    }
 };


  return (
    <span className='Recipepage' >
         <div className='WMessage'  style={{
    backgroundColor: "red",
   
  }} >
            <h2>Recipe search</h2>
            <p>Our recipe finder contains hundreds of heart healthy recipes with full nutritional analysis.</p>
         </div>
         
          <div className='userinputs'  >
                <input type="text" value={ingredients} 
                onChange={(e) =>setIngrdient(e.target.value)  }
              
                />
                <button onClick={fechRecipes} >Search</button>
            </div>    
            <div>
                 <ul>
                 {recipes.length > 0 && <h2>Matching Recipes:</h2>}
                    {recipes.map((recipe) => (
                        <li  className='recipes'  key={recipe.id} >
                            
                                   <h3>{recipe.title}</h3>
                                   <img src={recipe.image} alt="" style={{width:"100px"}} />
                                   <br />
                        </li> 
                       
                    ))
                    }
                    
                 </ul>
            </div>
    </span>
  )
}

export default RicipePage