import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import API from "../../../api";
import './ProfileCard.css';
import Card from 'react-bootstrap/Card';
import Placeholder from '../../../assets/placeholder.jpg'

const ProfileCard = ({ profileData }) => {

    const myUsername = JSON.parse(localStorage.getItem('username'))
    const userid = JSON.parse(localStorage.getItem('userid'))
    const [loading, setLoading] = useState(false);

    return (

        <div>
            <Card className="p-3" style={{ borderRadius: "7%" }}>
                <Card.Body>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Card.Title className='text-warning'>Profile</Card.Title>
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
                        <h4>Status</h4>
                        <h5>{profileData.status}</h5>
                    </div>
                    <div className='pt-3'>
                        <Button
                            variant={profileData.friends.includes(myUsername) ? "danger" : "primary"}
                            disabled={loading}
                            onClick={() => {
                                setLoading(true);
                                if (profileData.friends.includes(myUsername)) {
                                    API.post('/profile/friend/removefriend/' + `${userid}` + '?username='+`${profileData.username}`).then((response) => {
                                        setLoading(false);
                                        window.location.reload();
                                    }).catch(error => {
                                        console.log(error)
                                    });
                                }
                                else {
                                    API.post('/profile/friend/addfriend/' + `${userid}` + '?username='+`${profileData.username}`).then((response) => {
                                        setLoading(false);
                                        window.location.reload();
                                    }).catch(error => {
                                        console.log(error)
                                    });
                                }

                            }}
                        >
                            <i class={profileData.friends.includes(myUsername) ? "bi bi-person-x-fill" : "bi bi-person-add"}></i>&nbsp;&nbsp;&nbsp;
                            {loading ? profileData.friends.includes(myUsername) ? "Removing..." : 'Adding...' : profileData.friends.includes(myUsername) ? "Remove from Friends" : 'Add as Friend'}
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProfileCard;