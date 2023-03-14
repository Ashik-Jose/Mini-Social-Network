import React from 'react';
import FriendsList from './Friends/FriendsList';
import './Home.css';
import PostCard from './Posts/PostCard';
import ProfileCard from './ProfileCard/ProfileCard';


const Home = () => {
    return (
        <div className='home'>
            <div className='home-contents'>
               <ProfileCard/>
               <div>
                <div style={{backgroundColor:"white",height:"2.5rem"}}>
                <i class="bi bi-search ms-3"></i>
                <input 
                class="search-input ms-3 p-2" 
                type="text"
                placeholder='Search for friends...'
                />
                </div>
               <PostCard/>
               <PostCard/>
                </div>
                <div>
                   <FriendsList/>
                </div>
            </div>
        </div>
    );
}

export default Home;