import React from "react";
import {useParams} from 'react-router-dom'

const API_KEY = "aaa825c706f24d959e58185fc7ae9601";

const RecipeDetails = ({ recipe }) => {

    const { id } = useParams();
    const [details, setDetails] = useState(null);

    const fetchRecipeDetails= async () => {
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;
    
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
          }
          const data = await response.json();
          setDetails(data);
        } catch (error) {
          console.error("Error fetching details:", error.message);
        }
      };

  return (
    <div>
      {details ? (
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
        <p>Loading...</p>
      )}
      
    </div>
  );
};

export default RecipeDetails;
