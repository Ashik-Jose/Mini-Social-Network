import React from "react";
import PostCard from "./PostCard";

const Posts = ({ posts }) => {


  return (
    <div>
      {
        posts.length > 0 ?
          <div>
            {posts.map((post) => (
              <PostCard post={post} />
            ))}
          </div> :
          <div>
            <h1>No Posts</h1>
          </div>
      }
    </div>
  );
}

export default Posts;