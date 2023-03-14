import React, { useState } from "react";
import './ProfileCard.css';
import Card from 'react-bootstrap/Card';
import Placeholder from '../../../assets/placeholder.jpg'

const ProfileCard=() => {

    const [status,setStatus] = useState(true);


    return (
        
        <div>
        <Card className="p-3" style={{borderRadius:"7%"}}>
            <Card.Body>
                <Card.Title className='text-warning'>My Profile</Card.Title>
                <div className="mb-2 text-muted pt-2">
                    <img style={{borderRadius:"50%"}} src={Placeholder} alt=''/>
                </div>
                <div className='pt-2'>
                    <h4>Full Name</h4>
                    <h5>Ashik Jose</h5>
                </div>
                <div className='pt-2'>
                    <h4>Username</h4>
                    <h5>ashik</h5>
                </div>
                <div className='pt-2'>
                    <h4>Email</h4>
                    <h5>ashik@gmail.com</h5>
                </div>
                <div className='pt-2'>
                   <span style={{display:"flex",justifyContent:"space-between"}}>
                    <h4>Status</h4>
                    <i style={{cursor:"pointer"}} class={ status ?  "bi bi-pencil-fill pt-1" : "bi bi-check2 pt-1"} onClick={()=> setStatus(!status)}></i>
                    </span> 

                    {status ? 
                  <h5>Anything</h5>  :
                     <div>
                        <input 
                        type="text"
                        placeholder="Write Something"
                        className="status-input "
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