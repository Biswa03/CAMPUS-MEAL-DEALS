import React from 'react';
import './Footer.css';
import { FacebookIcon, InstagramIcon, PhoneIcon, YoutubeIcon} from 'lucide-react';

function Footer() {
    return (
        <footer className="footer">
                <div className='col-One'>
                    <h2>Campus Meal Deals</h2>
                    <p>Your one-stop solution for hassle-free meal planning! Enjoy a variety of delicious meals with our easy-to-use platform, designed to save you time and money.</p>
                    <h3 className='myName'>Made by Biswajyoti Sahoo</h3>
                </div>
                <div className='col-Two'>
                    <h3>Quick Links</h3>
                    <p>Today's Special</p>
                    <p>Discounts Available</p>
                    <p>Payment Options</p>
                </div>
                <div className='col-Three'>
                    <h3>Address</h3>
                    <p>Bhubaneswar, Odisha, India</p>
                    <p>+91 99888 77333</p>
                    
                    
                    <div className='icons'>
                        <InstagramIcon />
                        <FacebookIcon />
                        <YoutubeIcon />
                    </div>
                </div>
        </footer>
    );
}

export default Footer;
