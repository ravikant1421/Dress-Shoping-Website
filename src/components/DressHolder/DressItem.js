import React from 'react';

const DressItem = ({ item, addToCart }) => {
    const buyLargeHandler = () => {
        if (item.lSize > 0) {
            addToCart({ ...item,mSize: 0 , sSize:0 });
        }
    }
    const buyMediumHandler = () => {
        if (item.mSize > 0) {
            addToCart({ ...item, lSize: 0 , sSize:0 });
        }
    }
    const buySmallHandler = () => {
        if (item.sSize > 0) {
            addToCart({ ...item, lSize: 0 , mSize:0  });
        }
    }

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick={buyLargeHandler}>L: {item.lSize}</button>
            <button onClick={buyMediumHandler}>M: {item.mSize}</button>
            <button onClick={buySmallHandler}>S: {item.sSize}</button>
        </div>
    );
}

export default DressItem;
