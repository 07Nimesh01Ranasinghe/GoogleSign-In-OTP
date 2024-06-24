import React, { useState, useEffect } from 'react';
import './otpDisplay.css'

const OtpDisplay = () => {
  const [otp, setOtp] = useState('');
  const [expiryTime, setExpiryTime] = useState(30);
  

  useEffect(() => {
    const generateOtp = () => {
      const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setOtp(newOtp);
    };

    generateOtp();

    const intervalId = setInterval(() => {
      setExpiryTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          setOtp('');
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  

  return (
    <div id='otpDisplay'>
      {otp ? (
        <div>
          <p>Your OTP: {otp}</p>
          <p>Expires in: {expiryTime} seconds</p>
        </div>
      ) : (
        <p>OTP expired. Please sign in again to get a new OTP.</p>
      )}
    </div>
  );
};

export default OtpDisplay;