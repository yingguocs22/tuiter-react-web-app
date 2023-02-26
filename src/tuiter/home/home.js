import React from "react";
import posts from './homePosts.json';
import HomeItem from "./homeItem";

const Home = () => {
    return(
        <ul className="list-group">
            {
                posts.map(post =>
                    <HomeItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default Home;