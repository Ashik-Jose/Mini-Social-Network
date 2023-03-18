import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import API from '../../api/index.js'
import FriendsList from './Friends/FriendsList';
import './FriendProfile.css';
import Posts from './Posts/Posts.js';
import ProfileCard from './ProfileCard/ProfileCard';
import MutualFriends from './Friends/MutualFriends.js';
import placeholder from '../../assets/placeholder.jpg';


const FriendProfile = () => {

    const location = useLocation();
    const myFriends = location.state.myFriends;
    const navigate = useNavigate();
   const username = location.state.username;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [options, setOptions] = useState([]);

    useEffect(() => {
        // setLoading(true)
        API.get('/profile/friend/' + `${username}`).then((response) => {
            setLoading(false);
            setData(response.data);
        }).catch(error => {
            console.log(error)

        });
    });

    return (
        <div className='home'>
            {loading ?
                <div style={{ height: "100vh", justifyContent: "center", alignItems: "center", display: "flex" }}>
                    <Spinner animation="border" />
                </div>
                :
                <div className='home-contents'>
                    <ProfileCard profileData={data} />
                    <div style={{width:"35%"}}>
                        <div>
                            <div style={{ backgroundColor: "white", height: "2.5rem",width:"100%" }}>
                                <i class="bi bi-search ms-3"></i>
                                <input
                                    class="search-input ms-3 p-2"
                                    type="text"
                                    placeholder='Search for friends...'
                                    onChange={(e) => {
                                        if (e.target.value.length === 0) {
                                            setOptions([]);
                                        }
                                        else {
                                            API.get('/profile/search?searchquery=' + `${e.target.value}`).then((response) => {
                                                setOptions(response.data);
                                                //  console.log(response.data)
                                            }).catch(error => {
                                                console.log(error)

                                            });
                                        }
                                    }}
                                />
                            </div>
                            <div style={{ backgroundColor: "white", opacity: options.length > 0 ? "1" : "0", transition: "0.5s" }}>
                            {options.length > 0 && options.map((option) => {
                                    if (option.username !== data.username) {
                                        return (
                                            <p style={{ cursor: "pointer", fontWeight: "bold" }} className='ps-4' onClick={() => {
                                                //   console.log(option.username)
                                                navigate('/friendprofile', { state: { username: option.username } })
                                            }}>{option.username}</p>
                                        );
                                    }
                                }

                                )}
                            </div>
                        </div>
                        <Posts posts={data.posts}/>
                    </div>
                    <div>
                        <div className='d-flex' style={{cursor:"pointer"}} onClick={()=> {
                            navigate('/home')
                        }}>
                    <img src={placeholder} alt="" style={{ borderRadius: "50%", height: "3rem", width: "3rem" }} />
                                <h5 className='text-danger pt-2 ps-3'>My Profile</h5>
                        </div>
                    <div className='pt-2'>
                        <FriendsList friends={data.friends}/>
                        <MutualFriends friends={data.friends} myFriends={myFriends}/>
                    </div>
                    </div>
                </div>
            }
        </div>

    );
}

export default FriendProfile;