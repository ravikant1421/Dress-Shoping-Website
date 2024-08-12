import React from 'react';
import DressItem from './DressItem';

const DressHolder = ({ items, addToCart }) => {
    return (
        <div style={{ border: '2px solid black', padding: '10px', marginTop: '20px' }}>
            <h3>Dress To Buy </h3>
            {items.map(item => (
                <DressItem key={item.id} item={item} addToCart={addToCart} />
            ))}
        </div>
    );
}

export default DressHolder;
