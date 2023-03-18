import React from "react";
import { useNavigate } from "react-router-dom";
import Placeholder from '../../../assets/placeholder.jpg'
import Card from 'react-bootstrap/Card';

const FriendsList = ({ friends }) => {
    const navigate = useNavigate();
    const myusername = JSON.parse(localStorage.getItem('username'))

    return (
        <div className="pt-5 me-1" style={{ width: "100%" }}>
            <Card style={{ borderRadius: "7%" }}>
                <Card.Body>
                    <Card.Title style={{ fontSize: "1.6rem", fontFamily: "Times New Roman", fontWeight: "bold" }}>Friends ({friends.length})</Card.Title>
                    <div className="p-2 pt-4">

                        {friends.map((friend) => (
                            <span style={{ display: "flex" }} className="pb-4">
                                <img src={Placeholder} alt="" style={{ borderRadius: "50%", height: "3rem", width: "3rem" }} />
                                <p
                                    style={{ fontWeight: "bold", fontSize: "1.4rem", fontFamily: "Roboto", cursor:friend !== myusername &&  "pointer" }}
                                    onClick={() => {
                                        if(friend !== myusername)
                                            navigate('/friendprofile', { state: { username: friend } })
                                    }}
                                >&nbsp;&nbsp;{friend}</p>
                            </span>
                        )
                        )}


                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default FriendsList;