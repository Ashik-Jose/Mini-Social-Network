import React from "react";
import Placeholder from '../../../assets/placeholder.jpg'
 import Card from 'react-bootstrap/Card';

const FriendsList = () => {
    return (
        <div>
           <Card style={{borderRadius:"7%"}}>
            <Card.Body>
            <Card.Title>Friends (10)</Card.Title>
            <div className="p-2">
                <div className="pb-4">
                    <img src={Placeholder} alt="" style={{borderRadius:"50%",height:"2rem",width:"2rem"}}/>
                    &nbsp; &nbsp; Arun Neelakandan
                </div>
                <div className="pb-4">
                    <img src={Placeholder} alt="" style={{borderRadius:"50%",height:"2rem",width:"2rem"}}/>
                    &nbsp; &nbsp; Arun Neelakandan
                </div>
                <div className="pb-4">
                    <img src={Placeholder} alt="" style={{borderRadius:"50%",height:"2rem",width:"2rem"}}/>
                    &nbsp; &nbsp; Arun Neelakandan
                </div>
                <div className="pb-4">
                    <img src={Placeholder} alt="" style={{borderRadius:"50%",height:"2rem",width:"2rem"}}/>
                    &nbsp; &nbsp; Arun Neelakandan
                </div>
                
            </div>
            </Card.Body>
           </Card>
        </div>
    );
}

export default FriendsList;