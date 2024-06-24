import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from '../firebase';
import { getRedirectResult, signInWithRedirect } from 'firebase/auth';
import './homePage.css'

const SignIn = ({ setUser }) => {
  const [error, setError] = useState('');

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          setUser(result.user);
        }
      } catch (error) {
        console.error("Error during redirect result:", error);
        setError('Failed to sign in. Please try again. Error: ' + error.message);
      }
    };

    handleRedirectResult();
  }, [setUser]);

  const signInWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error("Error during sign-in:", error);
      setError('Failed to sign in. Please try again. Error: ' + error.message);
    }
  };

  return (
    <div id="signIn">
        <div id='weolcome'>
            <h2>Welcome</h2>
            <img id="googleImg" src={require("./Images/search.png")} />
        </div>
        
      <button id='signBtn' onClick={signInWithGoogle} >Sign In with Google</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignIn;