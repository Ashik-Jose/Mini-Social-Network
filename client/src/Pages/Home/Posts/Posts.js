import React from "react";
import PostCard from "./PostCard";

const Posts = ({ posts }) => {

  return (
    <div>
      {
        posts.length > 0 ?
          <div>
            {posts.map((post) => {
              return (
                <PostCard post={post} />
              )
            })
            }
          </div> :
          <div className="text-center pt-3">
            <h1>No Posts Found</h1>
          </div>
      }
    </div>
  );
}

export default Posts;