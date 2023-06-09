import React from "react";
import PostCard from "./PostCard";

const Posts = ({ posts, myuserid }) => {
  return (
    <div>
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <PostCard post={post} myuserid={myuserid} />
          ))}
        </div>
      ) : (
        <div>
          <h2 className="pt-5 text-center">No Posts Found</h2>
        </div>
      )}
    </div>
  );
};

export default Posts;
