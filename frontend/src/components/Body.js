import React from 'react';
import { useNavigate  } from 'react-router-dom';
import './Body.css'

function Body({openSignupModal }) {

    const navigate = useNavigate();

    const handleBuyCouponsClick = () => {
        navigate('/buycoupon');
    };

    return (
        <div className="body-container">
            
            <section className="hero">
                <div className="hero-content">
                    <h1>Explore, Select, and Redeem Your Weekly Meal Coupons</h1>
                    <p>Welcome to our Mess Coupon Buying Website, your one-stop solution for hassle-free meal planning! Enjoy a variety of delicious meals with our easy-to-use platform, designed to save you time and money.</p>
                    <div className="hero-buttons">
                        <button className="buy-coupons-btn" 
                        onClick={handleBuyCouponsClick}>Buy Coupons</button>

                    </div>

                    
                </div>
                <div className="hero-image">
                    <div className="hero-image-div"></div>
                
                </div>
            </section>
            
            {/* <div className="options">
                <div className="option">Breakfast</div>
                <div className="option">Lunch</div>
                <div className="option">Dinner</div>
            </div> */}

            {/* USER NAME or LOGIN / SIGN UP
            {user ? (
                <div>
                    <h2>Hello, {user.username}</h2>
                </div>
            ) : (
                <>
                    <h3>Please Login/Signup.</h3>
                </>
            )} */}
            
            <section className="top-picks">
                <h2>Top Picks this Week</h2>
                <div className="picks">
                    <div className="pick-item">
                        <img src={require('../data/Non-Veg/Chicken-Hyderabadi.jpg')} alt="Sara Freshly" />
                        <p>Chicken-Hyderabadi</p>
                    </div>
                    <div className="pick-item">
                        <img src={require('../data/Veg/Palak-Paneer.jpg')} alt="Sara Freshly" />
                        <p>Palak Paneer</p>
                    </div>
                    <div className="pick-item">
                        <img src={require('../data/Non-Veg/Mutton-Biryani.jpg')} alt="Sara Freshly" />
                        <p>Mutton Biryani</p>
                    </div>
                    <div className="pick-item">
                        <img src={require('../data/Veg/Paneer-Tikka.jpg')} alt="Sara Freshly" />
                        <p>Paneer Tikka</p>
                    </div>
                </div>
            </section>
            
            <section className="discover">
                <h2>Discover exclusive weekly meal deals for college students only on CampusMealDeals.</h2>
                <div className="discussSection">
                    <div className="discussPic"></div>
                    <div className="email-signup">
                        <input type="email" placeholder="Enter your email here" />
                        
                        <button className="get-now-btn"
                         onClick={openSignupModal}>Get Now</button>
                    </div>
                </div>
            </section>

            
        </div>
    );
}

export default Body;
