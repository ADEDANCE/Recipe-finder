import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


const API_KEY = "aaa825c706f24d959e58185fc7ae9601";

const RecipeDetails = () => {
  const [details, setDetails] = useState(null);
 const navigate = useNavigate();

  useEffect(() =>{
    const storedData = localStorage.getItem('fetchRecipeDetails');

    if (storedData) {
      setDetails(JSON.parse(storedData));
    }


  },[]);


  const handleExit = () => {
    navigate('/')
  }

 

    // const fetchRecipeDetails = async (recipeId) => {
    //   const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`;

    //   try {
    //     const response = await fetch(url);
    //     // if (!response.ok) {
    //     //   throw new Error(`API request failed with status ${response.status}`);
    //     // }
    //     const data = await response.json();
    //     setDetails(data);
    //     localStorage.setItem('fec')
    //   } catch (error) {
    //     console.error("Error fetching details:", error.message);
    //   }
    // };

    // fetchRecipeDetails();
  

  return (
    <div className="recipesDetails" >

      <Row>
        <Col md={7}  >
        {details ? (
        <div style={{ marginTop: "30px" }}>
          <h2>{details.title || "No Title Available"}</h2>
          <p>
            <strong>Time to Cook:</strong> {details.readyInMinutes ? `${details.readyInMinutes} minutes` : "N/A"}
          </p>
       
          <p>
  <strong className="strong" >Extended Ingredients:</strong>
</p>

  {details.extendedIngredients.map((ingredient, index) => (
    <ol key={index} style={{
      textAlign:'start'
    }}>
      {ingredient.amount} {ingredient.unit} - {ingredient.name} , 
    </ol>
  ))}

       <p><strong>Instructions:</strong></p>
<div dangerouslySetInnerHTML={{ __html: details.instructions }}></div>

        </div>
      ) : (
        <p>Loading recipe details...</p>
      )}
        </Col>
        {details ? (
  <Col>
    {details.image ? (
      <img className="detailsImg"
        src={details.image} 
        alt={details.title} 
        // style={{ display:'flex', justifyItems:'center' }} 
      />
    ) : (
      <p>No image available</p>
    )}
  </Col>
) : (
  <p>Loading recipe details...</p>
)}


      </Row>

 
      <button onClick={handleExit}  className="exitButton"  >Exit</button>
    </div>
  );
};

export default RecipeDetails;
