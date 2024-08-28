import React, { useEffect, useState } from 'react';
import './NavbarCouponPage.css';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Cart from './Cart';

function NavbarCouponPage({ cartData, onRemove, setCartData, totalAmount, selectedType, setAddedItems }) {

    const navigate = useNavigate();

    const Redirect = () => {
        navigate('/');
    };

    const [cartPopUp, setVisibility]=useState(false);

    
    const [size, setSize] = useState(0);

    useEffect(() => {
        setSize(cartData.length);
        console.log(cartData.length);
    }, [cartData]);   

    return (
        <header className="coupon-header">
            <div onClick={Redirect}
                 className="brand">Campus Meal Deals</div>
            
            <button onClick={()=>setVisibility(true)}
                className="cart-btn">
                <p>CART</p>
                <ShoppingCart/>
                <span className='cart-size'>{size}</span>
            </button>
  
            
            {cartPopUp && <Cart 
                cartData={cartData}
                onRemove={onRemove}
                setCartData={setCartData}
                totalAmount={totalAmount}
                selectedType={selectedType}
                setAddedItems={setAddedItems}

                onClose={() => setVisibility(false)}
            />}
        </header>
    );
}

export default NavbarCouponPage;
