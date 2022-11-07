import React from "react";
import "../home/index.css"
const TuitItem  = (
 {
   post = 
   {
    "_id": 234,
      "topic": "Space",
      "userName": "SpaceX",
      "time": "2h",
      "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
      "image": "teslaBigLogo.jpg",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 2345,
      "handle": "@spacex",
      "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
}
 }
) => {
 return(
  
    <div className="card wd-post-card">

    <div className="card-body">
    
        <div>
            <img className="wd-homepostTitle" src={require(`../images/${post.iconImg}`)}/>
            <p className="wd-postTrendingTitle bold">{post.userName}
                <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                <span className="wd-postTrendingTittleSub"> - {post.handle}</span>
                <span className="wd-postTrendingTittleSub"> - {post.time}</span>
            </p>
  
        </div>

        {/* <p className="card-text bold">{post.title}</p> */}
        <p className="card-text">{post.tuit}</p>
        {/* <div className="myContainer">
<img src={require(`../images/${post.image}`)} className="wd-img-style"/>

</div> */}
<div>
    <ul className="wd-navigation-list">
        <li><a href="#"><i className="bi bi-chat" aria-hidden="true"> <span
                        className="wd-icon-space">{post.replies}</span></i></a></li>
        <li><a href="#"><i className="bi bi-lightning" aria-hidden="true"> <span
                        className="wd-icon-space">{post.retuits}</span></i></a></li>
        <li><a href="#"><i className="bi bi-heart-fill" style={{ color: "red" }} aria-hidden="true"> <span
                        className="wd-icon-space">
                            <span style={{ color: "rgb(110, 118, 125)" }}>{post.likes}</span></span></i></a></li>
        <li><a href="#"><i className="bi bi-arrow-bar-up" aria-hidden="true"></i></a></li>
    </ul>
</div>
    </div>
   
    

</div>
 );
};
export default TuitItem;