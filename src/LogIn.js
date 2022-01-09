import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
const LogIn = () => {
  const clientId = "23960761921-9qpqb6rfk1js9g1t06b438fdgrficeso.apps.googleusercontent.com";
  const [showloginbtn, setShowloginbtn] = useState(true);
  const [showlogoutbtn, setShowlogoutbtn] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("Login success", res.profileObj);
    setShowloginbtn(false);
    setShowlogoutbtn(true);
  };
  const onFailureSuccess = (res) => {
    console.log("Login failure",res);
  };
  const onLogoutSucccess = () => {
    alert("You have been logged out successfully");
    setShowloginbtn(true);
    setShowlogoutbtn(false);
    console.clear();
  };
  return (
    <div>
        <h2 className="text-center text-primary mb-5">Please Login in your Google Account!</h2>
        
        {showloginbtn ? 
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onLoginSuccess}
        onFailure={onFailureSuccess}
        cookiePolicy={"single_host_origin"}
      /> : null }

     {showlogoutbtn ?
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSucccess}
      ></GoogleLogout>
      : null }
    </div>
  );
};

export default LogIn;
