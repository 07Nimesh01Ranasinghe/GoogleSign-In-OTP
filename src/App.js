import React, { useState } from 'react';
import SignIn from './Components/SignIn';
import OtpDisplay from './Components/OtpDisplay';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        
        <div>
          <p>Welcome, {user.email}</p>
          <OtpDisplay />
        </div>
      ) : (
        <SignIn setUser={setUser} />
      )}
    </div>

  );
};

export default App;