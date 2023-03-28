import React from 'react';
import "./SingleFood.css"

const SingleFood = (props) => {
    const {strCategory, strInstructions, strMeal, strMealThumb, strSource,} = props.food
    const displayOnCart = props.displayOnCart;

    return (
        <div className='card'>

            <div className="banner">
                <img src={strMealThumb} alt="" />
            </div>
            <div className="">
                <h3>Name: {strMeal}</h3>
                <h3>Catagory: {strCategory}</h3>
                <p>
                    <strong>Description:</strong> {strInstructions.length > 120 ? strInstructions.slice(0,120)+" ..." : strInstructions}
                </p>
                <p><strong>Source:</strong><br /> {strSource ? strSource: "None"}</p>
                <br />
                <span onClick={()=> displayOnCart(props.food)}>
                    <button>Add To Cart</button>
                </span>
            </div>
           
        </div>
    );
};

export default SingleFood;