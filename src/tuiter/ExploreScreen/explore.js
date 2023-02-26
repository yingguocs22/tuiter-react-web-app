import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const Explore = () => {
    return(
        <>
            <div className="row justify-content-between align-items-center mb-2">
                <div className="has-search col-11">
                    <span className="fa fa-search form-control-feedback"/>
                    <input type="text" className="form-control rounded-pill" placeholder="Search Tuiter"/>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end fas fa-cog fs-2 position-relative"/>
                </div>
            </div>

            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="/images/starship.jpg" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default Explore;
