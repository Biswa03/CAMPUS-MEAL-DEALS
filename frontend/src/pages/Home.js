import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import Body from "../components/Body.js";
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

import './Home.css'

function Home() {

    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const [user, setUser] = useState(null);

    const updateUser = (collegeId) => {
        setUser(collegeId);
        setShowModal(false);
    };

    const openLoginModal = () => {
        setIsLogin(true);
        setShowModal(true);
    };

    const openSignupModal = () => {
        setIsLogin(false);
        setShowModal(true);
    };


    return ( 
        <div className='home'>
            <Navbar className='navbar' 
            openLoginModal={openLoginModal}
            openSignupModal={openSignupModal} 
            updateUser={updateUser} 
            user={user}
            setUser={setUser}
            setShowModal={setShowModal}
            showModal={showModal}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            
            />
            <Body openSignupModal={openSignupModal}  />
 
            <Footer />
        </div>
    );
}

export default Home;
