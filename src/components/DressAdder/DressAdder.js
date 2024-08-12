import React, { useState } from 'react';
import DressHolder from '../DressHolder/DressHolder';
import CartItemHolder from '../Cart/CartItemHolder';

const DressAdder = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [lSize, setLSize] = useState('');
    const [mSize, setMSize] = useState('');
    const [sSize, setSSize] = useState('');
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const addProductHandler = () => {
        const newItem = {
            id: Math.random().toString(),
            title,
            description,
            price,
            lSize,
            mSize,
            sSize,
        };
        setItems((prevItems) => [...prevItems, newItem]);
    }

    const onTitleChangeHandler = (e) => setTitle(e.target.value);
    const onDescriptionChangeHandler = (e) => setDescription(e.target.value);
    const onPriceChangeHandler = (e) => setPrice(e.target.value);
    const onLSizeChangeHandler = (e) => setLSize(e.target.value);
    const onMSizeChangeHandler = (e) => setMSize(e.target.value);
    const onSSizeChangeHandler = (e) => setSSize(e.target.value);

    const addToCartHandler = (item) => {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
        setItems((prevItems) => prevItems.filter(i => i.id !== item.id));
    }

    const removeItemFromCart = (id) => {
        setCartItems((prevCartItems) => prevCartItems.filter(i => i.id !== id));
    }

    return (
        <div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <div>
                    <label style={{ display: 'block' }}>T-Shirt Name</label>
                    <input type="text" onChange={onTitleChangeHandler} />
                </div>
                <div>
                    <label style={{ display: 'block' }}>Description</label>
                    <input type="text" onChange={onDescriptionChangeHandler} />
                </div>
                <div>
                    <label style={{ display: 'block' }}>Price</label>
                    <input type="number" onChange={onPriceChangeHandler} />
                </div>
                <div>
                    <label style={{ display: 'block' }}>Quantity Available</label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div>
                            <label style={{ display: 'block' }}>L</label>
                            <input type="number" onChange={onLSizeChangeHandler} />
                        </div>
                        <div>
                            <label style={{ display: 'block' }}>M</label>
                            <input type="number" onChange={onMSizeChangeHandler} />
                        </div>
                        <div>
                            <label style={{ display: 'block' }}>S</label>
                            <input type="number" onChange={onSSizeChangeHandler} />
                        </div>
                    </div>
                </div>
                <button onClick={addProductHandler}>Add Product</button>
                <p>Cart: {cartItems.length}</p>
            </div>
            <DressHolder items={items} addToCart={addToCartHandler} />
            <CartItemHolder cartItems={cartItems} removeItem={removeItemFromCart} />
        </div>
    );
}

export default DressAdder;
