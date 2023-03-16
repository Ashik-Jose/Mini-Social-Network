import React from "react";
import { useNavigate } from "react-router-dom";
import Placeholder from '../../../assets/placeholder.jpg'
import Card from 'react-bootstrap/Card';

const MutualFriends = ({ friends,myFriends }) => {

    const navigate = useNavigate();

    const mutualFriends = friends.filter((friend) => myFriends.includes(friend));

    return (
        <div className="pt-5" >
        <Card style={{ borderRadius: "7%" }}>
            <Card.Body>
                <Card.Title style={{ fontSize: "1.6rem", fontFamily: "Times New Roman", fontWeight: "bold" }}>Mutual Friends ({mutualFriends.length})</Card.Title>
                <div className="p-2 pt-4">

                    {mutualFriends.map((friend) => (
                        <span style={{ display: "flex" }} className="pb-4">
                            <img src={Placeholder} alt="" style={{ borderRadius: "50%", height: "3rem", width: "3rem" }} />
                            <p
                                style={{ fontWeight: "bold", fontSize: "1.4rem", fontFamily: "Roboto", cursor: "pointer" }}
                                onClick={() => {
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

export default MutualFriends;