import "./index.css"
import React from "react";
import postsArray from './posts.json';
import PostSummaryItem
  from "./post-summary-item";

const PostSummaryList = () => {
 return(
<div className="contentBox">
${
     postsArray.map(post =>
        <PostSummaryItem
          key={post._id} post={post}/> )
 }
</div>
 );
};
export default PostSummaryList;