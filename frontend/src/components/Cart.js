import React, {  useRef } from 'react';
import './Cart.css';
import { X } from 'lucide-react'; 

function Cart({cartData=[], setCartData, onRemove, totalAmount, onClose, setAddedItems }) {
    if (!Array) {
        cartData = []; 
    }

    const cartRef=useRef();

    const closeCart=(e)=>{
        if(cartRef.current === e.target){
            onClose();
        }  
    }
 
    const handleRemove = (uId) => {
        const updatedCartData = cartData.filter(item => item.uId !== uId);
        onRemove(updatedCartData); 

        setAddedItems(prevState => {
            const updatedAddedItems = { ...prevState };
            delete updatedAddedItems[uId];
            return updatedAddedItems;
        });
    };

    const eraseCart = () => {
        setCartData([]);

        setAddedItems({});
    };

    const renderCartItems = (meal) => {
        // console.log(meal)
        // console.log(selectedType)
        return cartData
            .filter(item => item.meal === meal)
            .map((item, uId) => (
                <div key={item.uId} 
                style={{
                    backgroundColor: item.type === 'vegetarian' ? 'lightgreen' : 'red',
                    // backgroundColor: selectedType === 'vegetarian' ? 'lightgreen' : 'red',
                    padding: '0.3rem',
                    margin: '0.2rem',
                    color: 'white',
                    width: '3.5rem',
                    borderRadius: '0.2rem',
                    display: 'flex',
                    justifyContent: 'start'
                }} >
                   {item.day.substring(0, 3)}

                    <span  style={{ marginLeft: '0.5rem', cursor: 'pointer' }} 
                        onClick={() => handleRemove(item.uId)}
                    > X </span>
                </div>
            ));
    };

    return (
        <div ref={cartRef} onClick={closeCart} className="cart">
            <div className='carT'>
                <X onClick={onClose} className='xx' />

                <div className="cart-container">
                    
                    <div className='cart-coupons'>
                        <div className='breakfast-lunch-dinner'>
                            <div>
                                <h2>Breakfast ₹50</h2>
                                
                                    <div className='coupons-tag'>
                                        {renderCartItems('breakfast')}
                                    </div>
                                
                            </div>
                            <div>
                                <h2>Lunch ₹120</h2>
                                <div className='coupons-tag'>
                                    {renderCartItems('lunch')}
                                </div>
                            </div>
                            <div>
                                <h2>Dinner ₹80</h2>
                                <div className='coupons-tag'>
                                    {renderCartItems('dinner')}
                                </div>
                            </div>
                        </div>

                        <button className="clear-button" onClick={eraseCart}>
                            Clear Cart
                        </button>

                    </div>

                    <div className="cart-payment">
                        <h3>Payment Info</h3>
                        <div className="subtotal">
                            <p>Subtotal:</p>
                            <p>₹ {totalAmount ? totalAmount.toFixed(2) : '0.00'}</p>
                        </div>
                        <button className="checkout-button" >
                            Pay Now ₹  {totalAmount ? totalAmount.toFixed(2) : '0.00'}
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
}

export default Cart;