import React from 'react';
import './LoginPage.css'

const SignUpPage = ({changeAuth}) => {
    return (
           <form class="form-contents">
                <h3>Sign Up</h3>
                <div>
                <span className="mb-3 pt-1">
                    <label className='pb-2'>Firstname</label>
                    <input
                    required
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </span>
                <span className="mb-3 pt-1">
                    <label className='pb-2'>Lastname</label>
                    <input
                    required
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </span>
                </div>
                <div className=" pt-1">
                    <label className='pb-2'>Username</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className=" pt-1">
                    <label className='pb-2'>Email address</label>
                    <input
                        type="email"
                        required
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className=" pt-1">
                    <label className='pb-2'>Password</label>
                    <input
                        type="password"
                        required
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-3 pt-1">
                    <label className='pb-2'>Confirm Password Password</label>
                    <input
                        type="password"
                        required
                        className="form-control"
                        placeholder="Confirm password"
                    />
                </div>
                <div className="d-grid pt-1">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>

                <div className='pt-3'>
                    <spanp> Already Signed In? &nbsp; </spanp>
                    <span  style={{textDecoration:"underline",color:"blue",cursor:"pointer"}} onClick={()=>changeAuth()}> Sign In </span>
                </div>
            </form>
    );
}

export default SignUpPage;
