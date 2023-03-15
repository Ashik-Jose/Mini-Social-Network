import React, { useState } from "react";
import API from "../../../api";
import './ProfileCard.css';
import Card from 'react-bootstrap/Card';
import Placeholder from '../../../assets/placeholder.jpg'
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ profileData, userid }) => {

    const [status, setStatus] = useState(true);
    const [changeStatus, setChangeStatus] = useState({
        status: profileData.status || ""})
    const navigate = useNavigate();
    //  console.log(profileData)

    return (

        <div>
            <Card className="p-3" style={{ borderRadius: "7%" }}>
                <Card.Body>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Card.Title className='text-warning'>My Profile</Card.Title>
                        <i style={{ cursor: "pointer" }} class="bi bi-box-arrow-left" onClick={() => {
                            navigate('/');
                            localStorage.removeItem('userid')
                        }}></i>
                    </div>

                    <div className="mb-2 text-muted pt-2">
                        <img style={{ borderRadius: "50%" }} src={Placeholder} alt='' />
                    </div>
                    <div className='pt-2'>
                        <h4>Full Name</h4>
                        <h5>{profileData.firstName} {profileData.lastName}</h5>
                    </div>
                    <div className='pt-2'>
                        <h4>Username</h4>
                        <h5>{profileData.username}</h5>
                    </div>
                    <div className='pt-2'>
                        <h4>Email</h4>
                        <h5>{profileData.email}</h5>
                    </div>
                    <div className='pt-2'>
                        <span style={{ display: "flex", justifyContent: "space-between" }}>
                            <h4>Status</h4>
                            <i style={{ cursor: "pointer" }} class={status ? "bi bi-pencil-fill pt-1" : "bi bi-check2 pt-1"} onClick={() => {
                                setStatus(!status)
                                if (!status) {
                                    API.post('/profile/' + `${userid}` + '/statuschange',changeStatus).then((response) => {
                                        // setLoading(false);
                                        // setData(response.data);
                                    }).catch(error => {
                                        console.log(error)
                                    });
                                }
                            }}></i>
                        </span>

                        {status ?
                            <h5>{profileData.status || ""}</h5> :
                            <div>
                                <input
                                    type="text"
                                    placeholder="Write Something"
                                    className="status-input "
                                    value={changeStatus.status}
                                    onChange={(e) => setChangeStatus({...changeStatus,status: e.target.value})}
                                />
                            </div>
                        }

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProfileCard;