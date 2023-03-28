import React, { useEffect, useState } from 'react';
import SingleFood from '../SingleFood/SingleFood';
import "./FoodContainer.css"

const FoodContainer = () => {

    const [foods , setFoods] = useState([])

    useEffect(()=>{
        const loadFood=()=>{
            fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
            .then(res => res.json())
            .then(data => setFoods(data.meals))
        }

        loadFood();
    },[])

    return (
        <div>

            <div className="container">

                <div className="box1">

                    {
                        foods.map(food => <SingleFood
                        
                            food = {food} 
                            key = {food.idMeal}

                        >

                        </SingleFood>)
                    }

                </div>

                <div className="box2">

                    <div className="cart">
                        <h2>Orderd Items:</h2>
                    </div> 
                    
                </div>

            </div>
            
        </div>
    );
};

export default FoodContainer;