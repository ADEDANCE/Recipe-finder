import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeDetails from "./RecipeDetails";
import {useNavigate} from 'react-router-dom'

const API_KEY = "aaa825c706f24d959e58185fc7ae9601";

const RecipePage = () => {
  const [ingredients, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [details, setDetails] = useState([]);
 const navigate =useNavigate();

//  const handleViewDetails = () => {
//       navigate('');
//  } 

  const fetchRecipes = async () => {
    if (!ingredients.trim()) return;

    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&apiKey=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data);
      sessionStorage.setItem('fetchRecipes',JSON.stringify(data))
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };


  useEffect(() => {
    const storedData = sessionStorage.getItem("fetchRecipes");
    if (storedData) {
      setRecipes(JSON.parse(storedData));
    }
  }, []);


  

  const fetchRecipeDetails = async (recipeId) => {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setDetails(data);
      localStorage.setItem("fetchRecipeDetails",JSON.stringify(data));
      navigate('/RecipeDetails');

    } catch (error) {
      console.error("Error fetching details:", error.message);
    }
  };


    useEffect(() =>{
      const storedData = localStorage.getItem('fetchRecipeDetails');
  
      if (storedData) {
        setDetails(JSON.parse(storedData));
      }
  
  
    },[]);

  return (
    <div className="Recipepage">
      <div
        className="WMessage"
        style={{
          backgroundColor: "red",
        }}
      >
        <h2>Recipe search</h2>
        <p>
          Our recipe finder contains hundreds of heart-healthy recipes with full
          nutritional analysis.
        </p>
      </div>

      <div className="userinputs">
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button onClick={fetchRecipes}>Search</button>
      </div>

      <div
        style={{
          backgroundColor: "blueviolet",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {recipes.length > 0 && <h2 className="Recipesheading">Matching Recipes:</h2>}
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Row className="container recipes">
                <Col md={9}>
                  <h3>{recipe.title}</h3>
                  <button
                    // onClick={handleViewDetails}
                    onClick={() => fetchRecipeDetails(recipe.id)}
                    style={{
                      marginTop: "10px",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    View Recipe
                  </button>
                </Col>
                <Col md={2}>
                  <img src={recipe.image} alt="" style={{ width: "200px" }} />
                </Col>
              </Row>
              <br />
            </li>
          ))}
        </ul>
      </div>

      {/* {details ? (
        <div style={{ marginTop: "30px" }}>
          <h2>{details.title}</h2>
          <p>
            <strong>Time to Cook:</strong> {details.readyInMinutes} minutes
          </p>
          <img src={details.image} alt={details.title} width="250" />
          <p>
            <strong>Instructions:</strong>{" "}
            {details.instructions || "No instructions available."}
          </p>
        </div>
      ) : (
        <p>Loading recipe details...</p>
      )} */}

      {/* {details && <RecipeDetails recipe={details} />} */}
    </div>
  );
};

export default RecipePage;
