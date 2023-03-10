import React from "react";
import "./index.css";

const hasContent = (post) => {
    if (post.context_title === "" && post.context_text === "" && post.context_link === "") {
        return (
            <div>
                <img className="wd-content-image-round" src={`../../../tuiter/images/${post.image}`}/>
            </div>

        )
    }
    return (
        <div className="wd-context">
            <div>
                <img className="wd-content-image" src={`../../../tuiter/images/${post.image}`}/>
            </div>

            <div className="wd-second-content wd-font-size-15">
                <div className="text-truncate">
                    {post.context_title}
                </div>

                <div className="wd-fg-color-light-gray">
                    {post.context_text}
                </div>

                <div className="wd-fg-color-light-gray">
                    {hasLink(post)}
                </div>
            </div>
        </div>
    )
}

const hasLink = (
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
    return (
        <><i className="fa-solid fa-link me-1"/>{post.context_link}</>
    )
}


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
                                <i className="fas fa-ellipsis-h text-dark"/>
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
                            <a href="#"><i className={`fa-regular ${post.liked?'bi bi-heart-fill wd-like':'bi bi-heart'}`}/><span>{post.likes}</span></a>
                            <a href="#"><i className="bi bi-share"/><span>{post.share}</span></a>
                        </div>
                    </div>
                </div>
            </li>
        </>

    );
};

export default HomeItem;