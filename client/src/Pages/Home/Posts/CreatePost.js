import React from "react";
import { useState } from "react";
import API from "../../../api";
import Card from 'react-bootstrap/Card';
import './CreatePost.css';

const CreatePost = ({ userid }) => {

    const formdata = new FormData();

    const [filename, setFilename] = useState("");
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <div className="pt-5 me-1" style={{ width: "100%" }}>
            <Card style={{ borderRadius: "7%" }}>
                <Card.Body>
                    <Card.Title style={{ fontSize: "1.6rem", fontFamily: "Times New Roman", fontWeight: "bold" }}>Create a Post</Card.Title>
                    <div className="p-2 pt-3">
                        Choose a file to upload: &emsp;
                        <label htmlFor="post-upload" class="upload-button">Upload </label>
                        <input id="post-upload" className="d-none" type="file" onChange={(e) => {
                            setFilename(e.target.files[0])

                        }} />
                        {filename.name &&
                            <p className="ps-2" >
                                <span style={{ fontWeight: "bold" }}>{filename.name}</span> has been chosen
                            </p>
                        }
                    </div>
                    <div className="pt-3 ps-2">
                        <h5>Enter a comment</h5>
                        <textarea
                            required
                            className="p-2"
                            style={{ width: "100%" }}
                            value={comment}
                            onChange={(e) => { setComment(e.target.value) }}
                        />
                    </div>
                    <button
                        type="Submit"
                        className="btn btn-info mt-3 mb-2 "
                        style={{ width: "100%" }}
                        disabled={loading}
                        onClick={async () => {
                            setLoading(true)
                            formdata.append("post", filename)
                            formdata.append("comment", comment)
                            API.post('/profile/' + `${userid}` + '/putposts', formdata).then(response => {
                                setLoading(false)
                                setComment("")
                                setFilename("")
                            })
                                .catch(error =>
                                    console.log(error))
                        }}>
                        Post
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CreatePost;