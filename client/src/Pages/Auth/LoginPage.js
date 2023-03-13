import React from 'react';
import './LoginPage.css'

const LoginPage = ({changeAuth}) => {
    return (
           <form class="form-contents">
                <h3>Sign In</h3>
                <div className="mb-3 pt-3">
                    <label className='pb-2'>Username</label>
                    <input
                    required
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                    />
                </div>
                <div className="mb-3 pt-3">
                    <label className='pb-2'>Password</label>
                    <input
                        type="password"
                        required
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="d-grid pt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>

                <div className='pt-3'>
                    <spanp> New User? &nbsp; </spanp>
                    <span style={{textDecoration:"underline",color:"blue",cursor:"pointer"}} onClick={()=>changeAuth()}> Sign Up </span>
                </div>
            </form>
    );
}

export default LoginPage;
