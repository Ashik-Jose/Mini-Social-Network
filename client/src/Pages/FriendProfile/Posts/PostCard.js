import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Placeholder from '../../../assets/placehoder2.jpg';
import './PostCard.css';

const PostCard = ({post}) => {

    const [like,setLike] = useState(false)
    const [likeCount,setLikeCount] = useState(post.likes);

    return (
        <div className="pt-5" style={{width:"100%"}} >
            <Card style={{borderRadius:"6%"}}>
      <Card.Img variant="top" src={post.postPic || Placeholder} style={{height:"20rem",width:"100%",padding:"5px",borderRadius:"6%"}} />
      <Card.Body>
        <p>"{post.comment}"</p>
      <i style={{cursor:"pointer"}} class={like ? "bi bi-hand-thumbs-up-fill ps-2" : "bi bi-hand-thumbs-up ps-2"} onClick={()=> {
        setLike(!like);
        if(!like)
            setLikeCount(likeCount+1);
        else
            setLikeCount(likeCount-1);
      }}></i>
      <span>&nbsp;&nbsp; {likeCount}</span>
      </Card.Body>
    </Card>
        </div>
    );
}

export default PostCard;