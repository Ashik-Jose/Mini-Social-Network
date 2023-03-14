import React, { useState } from "react";
import './AuthPage.css'
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

const AuthPage=()=>{


    const [authState,setAuthState] = useState(false)

    const changeAuth=()=>{
        setAuthState(!authState);
    }

    

    return (
        <div class="authForm">
            {authState ? <SignUpPage changeAuth={changeAuth}/> : <LoginPage changeAuth={changeAuth}/>}
            
        </div>
    );
}

export default AuthPage;