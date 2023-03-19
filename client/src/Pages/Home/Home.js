import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import API from '../../api/index.js'
import FriendsList from './Friends/FriendsList';
import './Home.css';
import ProfileCard from './ProfileCard/ProfileCard';
import { useNavigate } from 'react-router-dom';
import CreatePost from './Posts/CreatePost.js';
import Posts from './Posts/Posts.js';


const Home = () => {

    const userid = JSON.parse(localStorage.getItem('userid'))
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [options, setOptions] = useState([]);

    useEffect(() => {
        // setLoading(true)
        API.get('/profile/' + `${userid}`).then((response) => {
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
                <div className='home-contents pb-5'>
                    <ProfileCard profileData={data} userid={userid} />
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
                            <div className='pb-2' style={{ backgroundColor: "white", opacity: options.length > 0 ? "1" : "0", transition: "0.5s" }}>
                                {options.length > 0 && options.map((option) => {
                                    if (option.username !== data.username) {
                                        return (
                                            <p style={{ cursor: "pointer", fontWeight: "bold" }} className='ps-4' onClick={() => {
                                                //   console.log(option.username)
                                                navigate('/friendprofile', { state: { username: option.username, myFriends: data.friends,dp: data.profilePic } })
                                            }}>{option.username}</p>
                                        );
                                    }
                                }

                                )}
                            </div>

                        </div>
                        <Posts posts={data.posts}/>
                    </div>
                    <div className='pt-5'>
                        <FriendsList friends={data.friends} dp={data.profilePic} />
                        <CreatePost userid={userid}/>
                    </div>
                </div>
            }
        </div>

    );
}

export default Home;