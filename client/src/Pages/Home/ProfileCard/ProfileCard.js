import React, { useState } from "react";
import API from "../../../api";
import './ProfileCard.css';
import Card from 'react-bootstrap/Card';
import Placeholder from '../../../assets/placeholder.jpg'
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ profileData, userid }) => {

    const formdata = new FormData();

    const [status, setStatus] = useState(true);
    const [changeStatus, setChangeStatus] = useState({
        status: profileData.status || ""
    })

    const navigate = useNavigate();

    function arrayBufferToBase64( buffer ) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
    }

    return (

        <div style={{width:"21%"}}>
            <Card className="p-3 text-center profileCard" style={{ borderRadius: "7%" }}>
                <Card.Body>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Card.Title className='text-warning' onClick={()=>{console.log(profileData.profilePic)}}>My Profile</Card.Title>
                        <i style={{ cursor: "pointer" }} class="bi bi-box-arrow-left" onClick={() => {
                            navigate('/');
                            localStorage.removeItem('userid')
                            localStorage.removeItem('username')
                        }}></i>
                    </div>

                    <div className="mb-2 text-muted pt-2">
                        <label htmlFor="file-upload">
                            <img style={{ borderRadius: "50%", cursor: "pointer",height:"8rem",width:"8rem" }} 
                            src={profileData.profilePic ? `data:image/jpg;base64,${arrayBufferToBase64(profileData.profilePic.data)}` : Placeholder} alt='' />
                        </label>

                        <input
                            type="file"
                            id='file-upload'
                            accept='.jpeg, .png, .jpg'
                            style={{ display: "none" }}
                            onChange={async (e) => {
                                formdata.append("profilePicture", e.target.files[0])
                             //   console.log(e.target.files[0])
                             //   const imageString = await convertToBase64(e.target.files[0])
                                API.post('/profile/' + `${userid}` + '/updateprofilepic', formdata).catch(error =>
                                    console.log(error))
                            }}
                        />

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
                        <div style={{display:"flex"}}>
                            <h4>&emsp;&emsp;&emsp;Status&emsp;&emsp;</h4>
                            <i style={{ cursor: "pointer" }} class={status ? "bi bi-pencil-fill pt-1" : "bi bi-check2 pt-1"} onClick={() => {
                                setStatus(!status)
                                if (!status) {
                                    API.post('/profile/' + `${userid}` + '/statuschange', changeStatus).then((response) => {
                                        // setLoading(false);
                                        // setData(response.data);
                                    }).catch(error => {
                                        console.log(error)
                                    });
                                }
                            }}></i>
                        </div>

                        {status ?
                            <h5>{profileData.status || ""}</h5> :
                            <div>
                                <input
                                    type="text"
                                    placeholder="Write Something"
                                    className="status-input "
                                    value={changeStatus.status}
                                    onChange={(e) => setChangeStatus({ ...changeStatus, status: e.target.value })}
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