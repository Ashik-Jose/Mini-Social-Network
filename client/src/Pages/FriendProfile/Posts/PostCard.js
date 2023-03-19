import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import API from "../../../api";
import Placeholder from '../../../assets/placehoder2.jpg';
import './PostCard.css';

const PostCard = ({ post,myuserid }) => {


    function arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    const [like, setLike] = useState(false)
    const [likeCount, setLikeCount] = useState(post.likes);

    return (
        <div className="pt-5" style={{ width: "100%" }} >
            <Card style={{ borderRadius: "6%" }}>
                <Card.Img  variant="top" src={`data:image/jpg;base64,${arrayBufferToBase64(post.postPic.data)}` || Placeholder} style={{ height: "20rem", width: "100%", padding: "5px", borderRadius: "6%" }} />
                <Card.Body>
                <p  className="ps-2" style={{fontSize:"20px",fontFamily:"Lucida Sans"}}>"{post.comment || ""}"</p>
                    <i style={{ cursor: "pointer" }} class={like ? "bi bi-hand-thumbs-up-fill ps-2" : "bi bi-hand-thumbs-up ps-2"} onClick={() => {
                        setLike(!like);
                        if (!like)
                            setLikeCount(likeCount + 1);
                        else
                        {
                            setLikeCount(likeCount - 1);
                        }
                            
                            API.post('/profile/friend/updatelikes/'+`${myuserid}`+'?postid='+`${post._id}`+'&likecount='+`${like ? likeCount-1 : likeCount+1}`).then((response) => {
                                console.log(response);
                            }).catch(error => {console.log(error)});
                    }}></i>
                    <span>&nbsp;&nbsp; {likeCount}</span>
                </Card.Body>
            </Card>
        </div>
    );
}

export default PostCard;