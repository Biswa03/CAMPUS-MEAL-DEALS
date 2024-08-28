import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import './BuyCoupon.css'
import Footer from '../components/Footer';
import MealRow from '../components/MealRow.js';
import NavbarCouponPage from '../components/NavbarCouponPage';
import Cart from '../components/Cart';

import { v4 as uuidv4 } from 'uuid';

import { mealsForWeek } from '../data/MealsData.js';
import { couponPrice } from '../data/MealsData.js';
import { SquareCheckBig } from 'lucide-react';
//₹

// const myUUID = uuidv4();
// // Step 3: Use the UUID
// console.log('Generated UUID:', myUUID);

function BuyCoupon() {

    const [selectedType, setSelectedType] = useState('vegetarian');
    
    const [cartData, setCartData] = useState([]);

    const [addedItems, setAddedItems] = useState({});


    // const AddToCart = (day, meal, type) => {
    //     const uId = uuidv4(); 
    //     const newItem = { uId, day, meal, type };
    //     console.log(uId);
    //     setCartData(prevCartData => [...prevCartData, newItem]);
    // };
    const AddToCart = (day, meal, type) => {
        const uId = uuidv4(); 
        const price = couponPrice[meal]; 
        const newItem = { uId, day, meal, type, price };
        console.log(uId);
        console.log(type);
        setCartData(prevCartData => [...prevCartData, newItem]);
    };

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const calculateTotalAmount = () => {
            return cartData.reduce((total, item) => total + item.price, 0);
        };

        setTotalAmount(calculateTotalAmount());
    }, [cartData]);
    
    const handleRemove = (updatedCartData) => {
        setCartData(updatedCartData);
    }; 
    
    const selectAll = () => {
    //    console.log({selectedType});
    //    console.log("HELLO");
        mealsForWeek[selectedType].forEach(dayMeals => {
            Object.keys(dayMeals.meals).forEach(mealType => {
                AddToCart(dayMeals.day, mealType, selectedType);
            });
        });

        // /console.log("cartData");
        // console.log(cartData);
    };

    const [cartPopUp, setVisibility]=useState(false);


    const [allItemsAdded, setAllItemsAdded] = useState(false);

    const handleSelectAllClick = () => {
        selectAll();  // Call the function that adds all items to the cart
        setAllItemsAdded(true); // Show the "Added all items to Cart" message

        // Revert back to the "Select All" button after 2 seconds
        setTimeout(() => {
            setAllItemsAdded(false);
        }, 2500);
    };
    
    return (
        <> 

            <NavbarCouponPage onRemove={handleRemove} 
                 totalAmount={totalAmount} cartData={cartData} 
                 setCartData={setCartData} selectedType={selectedType}
                 setAddedItems={setAddedItems} />

            <div className="coupon-container">

                <h1>Explore, Select, and Redeem Your Weekly Meal Coupons</h1>

                <section className="meal-coupons">
                    {/* <h2>Weekly Meal Coupons</h2> */}
                    <div className='filter-select-all'>
                        <div className="filter-buttons">
                            <button  className={`filter-btn vegetarian ${selectedType === 'vegetarian' ? 'active' : ''}`} 
                            onClick={() => setSelectedType('vegetarian')} >
                                Vegetarian
                            </button>
                            <button  className={`filter-btn non-vegetarian ${selectedType === 'nonVegetarian' ? 'active' : ''}`} 
                                onClick={() => setSelectedType('nonVegetarian')} >
                                Non-Vegetarian
                            </button>
                        </div>


                        {/* <div className='select-all'>
                            <button className='select-all-button'
                            onClick={selectAll} 
                            >Select All</button>
                        </div> */}

                         <div className='select-all'>
                                {!allItemsAdded ? (
                                    <button className='select-all-button' onClick={handleSelectAllClick}>
                                        Select All
                                    </button>
                                ) : (
                                    <div className="added-all-items">
                                        <p>Added all items to Cart</p>
                                        <SquareCheckBig className="cart-icon" />
                                    </div>
                                )}
                            </div>

                    </div>

                    <div className="name-tags">
                        <h1 className='day'>Days</h1>
                        <div className='bld'>
                            <h1>Breakfast ₹50</h1>
                            <h1>Lunch ₹120</h1>
                            <h1>Dinner ₹80</h1>
                        </div>
                    </div>

                    <div className="meal-week-menu">
                    {mealsForWeek[selectedType].map((mealData, index) => (
                        <MealRow 
                            key={index} 
                            day={mealData.day} 
                            icon={mealData.icon}
                            breakfast={mealData.meals.breakfast}
                            lunch={mealData.meals.lunch}
                            dinner={mealData.meals.dinner} 
                            genre={selectedType}
                            AddToCart={AddToCart} cartData={cartData} 
                            setAddedItems={setAddedItems} 
                            addedItems={addedItems} />
                    ))}
                    </div>
    
                </section>
            </div>
            

            <div className='go-to-cart'>
                <button className='go-to-cart-button'
                    onClick={()=>setVisibility(true)}
                >Go To Cart</button>
            </div>

             {cartPopUp && <Cart 
                cartData={cartData}
                onRemove={handleRemove}
                setCartData={setCartData}
                totalAmount={totalAmount}
                selectedType={selectedType}
                setAddedItems={setAddedItems}

                onClose={() => setVisibility(false)}
            />}
        <Footer/>
        </>
        
    );
}

export default BuyCoupon;
