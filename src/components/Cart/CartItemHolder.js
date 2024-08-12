import React from 'react';
import CartItem from './CartItem';

const CartItemHolder = ({ cartItems, removeItem }) => {
    return (
        <div style={{ border: '2px solid black', padding: '10px', marginTop: '20px' }}>
            <h3>Cart</h3>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} removeItem={removeItem} />
            ))}
        </div>
    );
}

export default CartItemHolder;
