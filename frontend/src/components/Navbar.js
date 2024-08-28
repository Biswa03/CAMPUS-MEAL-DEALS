import React from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css'
import Modal from './Modal.js';
import { useNavigate } from 'react-router-dom';
import { CircleUser } from 'lucide-react';

function Navbar({showModal, setShowModal, isLogin, setIsLogin, user, setUser, updateUser, openLoginModal, openSignupModal}) {
    // const [showModal, setShowModal] = useState(false);
    // const [isLogin, setIsLogin] = useState(true);

    // const [user, setUser] = useState(null);

    // const updateUser = (collegeId) => {
    //     setUser(collegeId);
    //     setShowModal(false);
    // };

    // const openLoginModal = () => {
    //     setIsLogin(true);
    //     setShowModal(true);
    // };

    // const openSignupModal = () => {
    //     setIsLogin(false);
    //     setShowModal(true);
    // };

    const navigate = useNavigate();

    const Redirect = () => {
        navigate('/');
    };

    return (   
        <nav className="navbar">
            <div onClick={Redirect} className="navbar-brand">
                Campus Meal Deals
            </div>
            <div className="navbar-links">
            {user ? (
                <span className="user-info">{user}<CircleUser/></span>
            ) : (
                <>
                    <button onClick={openLoginModal} className="navbar-login">Log in</button>
                    <button onClick={openSignupModal} className="navbar-signup">Sign up</button>
                </>
            )}
            </div>   
        
            {showModal && <Modal onClose={() => setShowModal(false)} isLogin={isLogin} setIsLogin={setIsLogin} updateUser={updateUser} />}
        </nav>
        
    );
}

export default Navbar;