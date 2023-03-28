import React from 'react';
import "./SingleFood.css"

const SingleFood = (props) => {

    console.log(props.food);
    const {strCategory, strInstructions, strMeal, strMealThumb, strSource} = props.food

    return (
        <div className='card'>

            <div className="banner">
                <img src={strMealThumb} alt="" />
            </div>
            <div className="">
                <h3>Name: {strMeal}</h3>
                <h3>Catagory: {strCategory}</h3>
                <p>
                    Description: {strInstructions.length > 120 ? strInstructions.slice(0,120)+" ..." : strInstructions}
                </p>
                <p><strong>Source:</strong><br /> {strSource ? strSource: "None"}</p>
                <br />
                <span>
                    <button>Add To Cart</button>
                </span>
            </div>
           
        </div>
    );
};

export default SingleFood;