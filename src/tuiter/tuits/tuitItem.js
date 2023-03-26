import React from "react";
import "../home/index.css";
import {useDispatch} from "react-redux";
import {deleteTuit, updateLike} from "./tuits-reducer";

const HomeItem = (
    {
        post = {
            "avatar": "../images/elonmuskavatar.jpg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "title": "Amazong show about @Inspiration4x mission!",
            "image": "../images/inspiration4x.jpg",
            "context_title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "context_text": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
            "context_link": "netflix.com",
            "comment": "4.2k",
            "repeat":"3.5k",
            "like":"37.5k",
            "share": ""
        }
    }
) => {
    // language=JavaScript
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    const updateLikeHandler = (post) => {
        dispatch(updateLike(post));
    }

    return(
        <>
            <li className="list-group-item float-end">
                <div>
                    <div className="wd-float-left-10">
                        <img className="wd-avatar" src={`/images/${post.image}`}/>
                    </div>

                    <div className="wd-float-left-90">
                        <div className="d-flex justify-content-between">
                            <div>
                                <span>{post.userName}</span>
                                <i className="fas fa-check-circle ms-1"/>
                                <span className="wd-fg-color-light-gray"> {post.handle} • {post.time}</span>
                            </div>
                            <div>
                                <i className="bi bi-x-lg float-end"
                                   onClick={() => deleteTuitHandler(post._id)}></i>
                            </div>
                        </div>

                        <div>
                            <div className="wd-second-content wd-font-size-15">
                                <div className="wd-fg-color-light-gray">
                                    {post.tuit}
                                </div>
                            </div>
                        </div>


                        <div className="wd-icon-container d-flex justify-content-between align-items-center wd-font-size-15">
                            <a href="#"><i className="bi bi-chat"/><span>{post.replies}</span></a>
                            <a href="#"><i className="bi bi-arrow-repeat"/><span>{post.retuits}</span></a>
                            <a href="#"><i onClick={() => updateLikeHandler(post)} className={`fa-regular ${post.liked?'bi bi-heart-fill wd-like':'bi bi-heart'}`}/><span>{post.likes}</span></a>
                            <a href="#"><i className="bi bi-share"/><span>{post.share}</span></a>
                        </div>
                    </div>
                </div>
            </li>
        </>

    );
};

export default HomeItem;