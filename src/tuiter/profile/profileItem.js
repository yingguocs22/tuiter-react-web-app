import React from "react";
import "./index.css";
import {useNavigate} from "react-router";


const ProfileItem = (
    {
        info =
            {   "name": "Ying Guo",
                "handle": "@yingguo",
                "profilePicture": "ying.jpg",
                "bannerPicture": "background.jpg",
                "bio": "CS student at Northeastern University.",
                "website": "",
                "location": "Sunnyvale, CA",
                "dateOfBirth": "08/08/2008",
                "dateJoined": "9/2021",
                "followingCount": 340,
                "followersCount": 223
            }
    }
) => {
    const navigate = useNavigate();
    const navigateEdit = () => {
        navigate('../edit-profile-a7');
    };
    return(
        <li className="list-group-item">
            <div className="row">
                <div className='col-1'>
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className='col-11 float-start'>
                    <span className="wd-title wd-margin-left-0">{info.name}</span> <br/>
                    <span className="wd-appendfix">6,144 Tweets</span>
                </div>
            </div>

            <img className="wd-banner" src={info.bannerPicture}/>

            <div className="row">
                <div className="col-3">
                    <img className="wd-pos-relative-nudge-up-right" src={info.profilePicture}/>
                </div>
                <div className="col-9 mt-2">
                    <button onClick={navigateEdit} className="wd-button-border rounded-pill float-end wd-font-bold wd-content">Edit profile</button>
                </div>
            </div>

            <div className="ms-3 me-3">
                <span className="wd-title wd-margin-left-0">{info.name}</span> <br/>
                <span className="wd-appendfix">{info.handle}</span> <br/><br/>
                <span className="wd-content">{info.bio}</span> <br/>
            </div>

            <div className="ms-3 me-3 wd-icon d-flex align-items-center wd-font-size-15">
                <a href="#"><i className="bi bi-geo-alt"/><span>{info.location}</span></a>
                <a href="#"><i className="bi bi-balloon"/><span>{info.dateOfBirth}</span></a>
                <a href="#"><i className="bi bi-calendar4-week"/><span>Joined {info.dateJoined}</span></a>
            </div>

            <div className="ms-3 me-3 d-flex align-items-center wd-font-size-15">
                <div className='me-2'><span className="wd-content">{info.followingCount} </span> <span className="wd-appendfix">Following</span></div>
                <div ><span className="wd-content">{info.followersCount} </span> <span className="wd-appendfix">Follower</span></div>
            </div>

        </li>
    );
};
export default ProfileItem;