import React, { useEffect, useState } from 'react';
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

console.log(foods);
    return (
        <>

            <div className="container">

                <div className="box1">

                    {
                        foods.map(food => <h2>food</h2>)
                    }

                </div>

                <div className="box2">

                </div>

            </div>
            
        </>
    );
};

export default FoodContainer;