import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import API from '../../api';
import './LoginPage.css'

const SignUpPage = ({ changeAuth }) => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
    })

    const [confirmPassword, setConfirmPassword] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    var pass = "";


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
                        placeholder="Enter Firstname"
                        value={data.firstName}
                        onChange={(e) => setData({ ...data, firstName: e.target.value })}
                    />
                </span>
                <span className="mb-3 pt-1">
                    <label className='pb-2'>Lastname</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Enter Lastname"
                        value={data.lastName}
                        onChange={(e) => setData({ ...data, lastName: e.target.value })}
                    />
                </span>
            </div>
            <div className=" pt-1">
                <label className='pb-2'>Username</label>
                <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Enter Username"
                    value={data.username}
                    onChange={(e) => setData({ ...data, username: e.target.value })}
                />
            </div>
            <div className=" pt-1">
                <label className='pb-2'>Email address</label>
                <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="Enter email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />
            </div>
            <div className=" pt-1">
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
            <div className="mb-3 pt-1">
                <label className='pb-2'>Confirm Password Password</label>
                <input
                    type="password"
                    required
                    className="form-control"
                    placeholder="Confirm password"
                    //   value={pass}
                    onChange={(e) => {
                        pass = e.target.value;
                        if (pass != data.password)
                            setConfirmPassword(true)
                        else
                            setConfirmPassword(false)
                    }}
                />
                {confirmPassword && <p style={{ color: "red" }}>Password Mismatch Found</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <div className="d-grid pt-1">
                <buttom
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => {
                        if (!confirmPassword && !error) {
                            setLoading(true);
                            setError("");
                            API.post('/auth/signUp', data).then((response) => {
                                setLoading(false);
                                changeAuth()
                            }).catch(error => {
                                setLoading(false);
                                setError(error.response.data.message)
                                console.log(error)

                            });
                        }

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
                <spanp> Already Signed In? &nbsp; </spanp>
                <span style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }} onClick={() => changeAuth()}> Sign In </span>
            </div>
        </form>
    );
}

export default SignUpPage;
