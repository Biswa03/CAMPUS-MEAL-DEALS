import {React, useState} from 'react'
import './Modal.css'
import { X } from 'lucide-react';
import axios from 'axios'

function Modal({ onClose, isLogin, setIsLogin, updateUser}) {
  // const modalRef= useRef();

  const [collegeId, setCollegeId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
    if (isLogin) { // Handle Login successful, update navbar with college ID
        try {
          const response = await axios.post('http://localhost:5000/api/auth/login', { collegeId, password });
          // Login successful, update navbar with college ID
          updateUser(response.data.collegeId);
          onClose(); // close modal after successful login
        } catch (error) {// handle login error
            console.error('Error during Login:', error);
            alert('Authentication failed:-' + (error.response?.data?.message || 'Please try again.'));
        }
    } else {  // Handle signup
      try {
          const response = await axios.post('http://localhost:5000/api/auth/signup', { collegeId, email, password });
          // Signup successful, prompt user to log in
          alert('Signup successful. Please log in.');
          setIsLogin(true); // Switch to login mode after signup
      } catch (error) {
          console.error('Error during signup:', error);
          alert('Signup failed: ' + (error.response?.data?.message || 'Please try again!!!'));
        }
    }
      onClose(); // close modal after login/signup ??????
};


  return (
   
    <div className="modal" onClick={onClose}>
          <button onClick={onClose} className='xx'><X/></button>

      <div className="login-container" onClick={(e) => e.stopPropagation()}>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

          <form onSubmit={handleSubmit}>
              <label htmlFor="collegeId">College ID:</label>
              <input 
                  type="text" 
                  id="collegeId" 
                  value={collegeId} 
                  onChange={(e) => setCollegeId(e.target.value)} 
                  required 
              />
              {!isLogin && (
                  <>
                      <label htmlFor="email">Email:</label>
                      <input  type="email"  id="email"  value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          required 
                      />
                  </>
              )}
              <br/>
              <label htmlFor="password">Password:</label>
              <input type="password"  id="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
              />

              <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
              <p>
                  {isLogin ? (
                      <span onClick={() => setIsLogin(false)}>
                        Not registered? Sign Up
                      </span>
                  ) : (
                      <span onClick={() => setIsLogin(true)}>
                        Already registered? Login
                      </span>
                  )}
              </p>
          </form>
      </div>
    </div>
  )
}

export default Modal

 // <div ref={modalRef} onClick={closeModal} className="modal">
    //   <button onClick={onClose} className='xx'><X /></button> 
    //   <div class="login-container">
    //     <h2>Login</h2>
    //       <form action="/login" method="post">
    //           <label for="username">Username:</label>
    //           <input type="text" id="username" name="username" required/>

    //           <label for="password">Password:</label>
    //           <input type="password" id="password" name="password" required/>
    //           <br/>
    //           <button type="submit">Login</button>
    //           <p>Not registered? Sign UP</p>
    //       </form>
    //   </div>
    // </div>
