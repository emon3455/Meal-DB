import React, { useEffect, useState } from 'react';
import Cart from '../Cart/CArt';
import SingleFood from '../SingleFood/SingleFood';
import "./FoodContainer.css"

const FoodContainer = () => {

    const [foods , setFoods] = useState([])
    const [selectedItems , setSelectedItems] = useState([])

    const displayOnCart =(product)=>{

        const newItems = [...selectedItems , product]
        setSelectedItems(newItems);

    }

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
                            displayOnCart={displayOnCart}
                        >

                        </SingleFood>)
                    }

                </div>

                <div className="box2">

                    <Cart selectedItems={selectedItems}></Cart>

                </div>

            </div>
            
        </div>
    );
};

export default FoodContainer;