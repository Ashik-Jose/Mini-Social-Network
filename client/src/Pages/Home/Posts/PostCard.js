import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Placeholder from '../../../assets/placehoder2.jpg';
import './PostCard.css';

const PostCard = ({post}) => {

   // const [like,setLike] = useState(false)
   // const [likeCount,setLikeCount] = useState(post.likes);

    return (
        <div className="postCard pt-5" style={{width:"100%"}} >
            <Card style={{borderRadius:"6%"}}>
      <Card.Img variant="top" src={post.postPic || Placeholder} style={{height:"20rem",width:"100%",padding:"5px",borderRadius:"6%"}} />
      <Card.Body>
        <p  className="ps-2" style={{fontSize:"20px",fontFamily:"Lucida Sans"}}>"{post.comment}"</p>
        <span className="d-flex justify-content-between">
            <div>
      <i class= "bi bi-hand-thumbs-up-fill ps-4" style={{color:"blue",fontSize:"1.4rem",cursor:"pointer"}}
      ></i>
      <span>&nbsp;&nbsp; {post.likes}</span>
      </div>
      <div className="pe-3" style={{cursor:"pointer",fontSize:"1.4rem"}}>
      <i class="bi bi-trash"></i>
      </div>
      </span>
      </Card.Body>
    </Card>
        </div>
    );
}

export default PostCard;