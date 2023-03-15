import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './LoginPage.css';
import API from '../../api';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ changeAuth }) => {

    const [data, setData] = useState({ username: "", password: "" })
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

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
                    onChange={(e) => setData({ ...data, username: e.target.value })}
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
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />
            </div>
            <div className="d-grid pt-3">
                <buttom type="submit" className="btn btn-primary" onClick={() => {
                    setLoading(true);
                    // console.log(data)

                    API.post('/auth/signIn', data).then((response) => {
                        setLoading(false);
                        localStorage.setItem('userid', JSON.stringify(response.data.user._id));
                        navigate('/home')
                        //console.log(response.data.user._id)
                    }).catch(error => {
                        console.log(error)
                    });
                }}>
                    {loading && <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />}
                    Submit
                </buttom>
            </div>

            <div className='pt-3'>
                <spanp> New User? &nbsp; </spanp>
                <span style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }} onClick={() => changeAuth()}> Sign Up </span>
            </div>
        </form>
    );
}

export default LoginPage;
