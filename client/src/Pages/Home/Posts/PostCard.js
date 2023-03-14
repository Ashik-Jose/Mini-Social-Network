import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Placeholder from '../../../assets/placehoder2.jpg';
import './PostCard.css';

const PostCard = () => {

    const [like,setLike] = useState(false)
    const [likeCount,setLikeCount] = useState(10);

    return (
        <div className="p-5" >
            <Card style={{borderRadius:"6%"}}>
      <Card.Img variant="top" src={Placeholder} style={{height:"20rem",width:"100%",padding:"5px"}} />
      <Card.Body>
      <i class={like ? "bi bi-hand-thumbs-up-fill" : "bi bi-hand-thumbs-up"} onClick={()=> {
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