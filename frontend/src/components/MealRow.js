import {React, useEffect} from 'react';
import './MealRow.css';
import { ShoppingCart, SquareCheckBig } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const MealRow = ({ day, icon, breakfast, lunch, dinner, genre, AddToCart, cartData, setAddedItems, addedItems }) => {


    useEffect(() => {
        const updatedAddedItems = {};
        cartData.forEach(item => {
            if (item.day === day) {
                updatedAddedItems[item.uId] = true;
            }
        });
        // setAddedItems(updatedAddedItems);

        setAddedItems(prevState => {
            const newState = { ...prevState };
    
            // Iterate through current items in addedItems
            Object.keys(prevState).forEach(mealName => {
                // If the uId corresponding to mealName is not in cartData, remove it
                const correspondingItem = cartData.find(item => item.uId === mealName);
                if (!correspondingItem || correspondingItem.day !== day) {
                    delete newState[mealName];
                }
            });
    
            return { ...newState, ...updatedAddedItems };
        });
    }, [ day]);

    const handleAddToCart = (mealType, mealName) => {
        const uId = uuidv4();
        // AddToCart(day, mealName, genre, uId);
        setAddedItems(prevState => ({ ...prevState, [mealName]: true }));
    };

    return (  
        <div className="meal-row">
            <div className="meal-day">
                <h3>{day} </h3>
                <h3>{icon} </h3>
            </div>

            <div className="meal-menu">
                 {/* Breakfast */}
                <div className="meal-item"  onClick={() => {
                    AddToCart(day, 'breakfast', genre);
                    handleAddToCart('breakfast', breakfast.name);
                   }
                }>
                    <img src={breakfast.image} alt={breakfast.name} className="meal-image" />
                    <p>{breakfast.name}</p>

                    {!addedItems[breakfast.name] ? (
                        <div className="add-to-cart">
                            <ShoppingCart className="cart-icon" />
                            <p>Add to Cart</p>
                        </div>
                    ) : (
                        <div className="added-to-cart">
                            <SquareCheckBig className="cart-icon" />
                            <p>Added to Cart</p>
                        </div>
                    )}
                </div>

                <div className="meal-item"   onClick={() => 
                 {AddToCart(day, 'lunch', genre);
                   handleAddToCart('lunch', lunch.name);}  
                }>
                    <img src={lunch.image} alt={lunch.name} className="meal-image" />
                    <p>{lunch.name}</p>

                    {!addedItems[lunch.name] ? (
                        <div className="add-to-cart">
                            <ShoppingCart className="cart-icon" />
                            <p>Add to Cart</p>
                        </div>
                    ) : (
                        <div className="added-to-cart">
                            <SquareCheckBig className="cart-icon" />
                            <p>Added to Cart</p>
                        </div>
                    )}
                </div>

                <div className="meal-item"  onClick={() => 
                 {AddToCart(day, 'dinner', genre);
                   handleAddToCart('dinner', dinner.name);}  
                }>
                    <img src={dinner.image} alt={dinner.name} className="meal-image" />
                    <p>{dinner.name}</p>

                    {!addedItems[dinner.name] ? (
                        <div className="add-to-cart">
                            <ShoppingCart className="cart-icon" />
                            <p>Add to Cart</p>
                        </div>
                    ) : (
                        <div className="added-to-cart">
                            <SquareCheckBig className="cart-icon" />
                            <p>Added to Cart</p>
                        </div>
                    )}
                </div>
            </div>  
        </div>
    );
};

export default MealRow;

