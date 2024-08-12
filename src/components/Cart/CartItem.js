import React from 'react';

const CartItem = ({ item, removeItem }) => {
    const placeOrderHandler = () => {
        alert('Your Order is Placed');
        removeItem(item.id);
    }

    const cancelHandler = () => {
        removeItem(item.id);
    }

    return (
        <div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <p>L: {item.lSize}</p>
                <p>M: {item.mSize}</p>
                <p>S: {item.sSize}</p>
            </div>
            <button onClick={placeOrderHandler}>Place Order</button>
            <button onClick={cancelHandler}>Cancel</button>
        </div>
    );
}

export default CartItem;
