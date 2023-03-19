import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import API from "../../../api";
import Placeholder from "../../../assets/placehoder2.jpg";

const PostCard = ({ post }) => {
  const userid = JSON.parse(localStorage.getItem("userid"));
  const [loading, setLoading] = useState(false);

  function arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  return (
    <div className="postCard pt-5" style={{ width: "100%" }}>
      <Card style={{ borderRadius: "6%" }}>
        <Card.Img
          variant="top"
          src={
            `data:image/jpg;base64,${arrayBufferToBase64(post.postPic.data)}` ||
            Placeholder
          }
          style={{
            height: "20rem",
            width: "100%",
            padding: "5px",
            borderRadius: "6%",
            opacity: loading ? "0.2" : "1",
          }}
        />
        <Card.Body>
          <p
            className="ps-2"
            style={{ fontSize: "20px", fontFamily: "Lucida Sans" }}
          >
            "{post.comment || ""}"
          </p>
          <span className="d-flex justify-content-between">
            <div>
              <i
                class="bi bi-hand-thumbs-up-fill ps-4"
                style={{ color: "blue", fontSize: "1.4rem", cursor: "pointer" }}
              ></i>
              <span>&nbsp;&nbsp; {post.likes}</span>
            </div>
            <div
              className="pe-3"
              style={{ cursor: "pointer", fontSize: "1.4rem" }}
            >
              <i
                class="bi bi-trash"
                onClick={() => {
                  setLoading(true);
                  API.post(
                    "/profile/friend/deleteposts/" +
                      `${userid}` +
                      "?postid=" +
                      `${post._id}`
                  )
                    .then((response) => {
                      setLoading(false);
                      window.location.reload();
                    })
                    .catch((error) => {
                      setLoading(false);
                      console.log(error);
                    });
                }}
              ></i>
            </div>
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostCard;
