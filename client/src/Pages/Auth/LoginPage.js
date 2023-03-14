import React, { useState } from 'react';
import './LoginPage.css';
import API from '../../api';

const LoginPage = ({changeAuth}) => {

    const [data,setData] = useState({username:"",password:""})


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
                        value={data.username}
                        onChange={(e)=> setData({...data,username:e.target.value})}
                    />
                </div>
                <div className="mb-3 pt-3">
                    <label className='pb-2'>Password</label>
                    <input
                        type="password"
                        required
                        className="form-control"
                        placeholder="Enter password"
                        value={data.password}
                        onChange={(e)=> setData({...data,password:e.target.value})}
                    />
                </div>
                <div className="d-grid pt-3">
                    <buttom type="submit" className="btn btn-primary" onClick={()=>{

                           // console.log(data)

                            API.post('/auth/signIn', data).then((response) => {
                                console.log("Logged In")
                            }).catch(error => {
                                console.log(error)

                            });

                    }}>
                        Submit
                    </buttom>
                </div>

                <div className='pt-3'>
                    <spanp> New User? &nbsp; </spanp>
                    <span style={{textDecoration:"underline",color:"blue",cursor:"pointer"}} onClick={()=>changeAuth()}> Sign Up </span>
                </div>
            </form>
    );
}

export default LoginPage;
