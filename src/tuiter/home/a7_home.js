import React from "react";
// import posts from './homePosts.json';
import {useSelector} from "react-redux";
import A7_HomeItem from "./a7_homeItem";

const A7_Home = () => {
    const posts = useSelector(state => state.homes)
    return(
        <ul className="list-group">
            {
                posts.map(post =>
                    <A7_HomeItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default A7_Home;