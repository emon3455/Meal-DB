import React from 'react';
import "./Cart.css"

const Cart = (props) => {

    const lists = props.selectedItems;

    return (
        <div className='cart'>
            <h2>Orderd Items:</h2>
            <h4>Selected item: {props.selectedItems.length}</h4>
            {
                lists.map(item => <li>{item.strMeal}</li>)  
            }
            <button>Confirm Order</button>
        </div>
    );
};

export default Cart;