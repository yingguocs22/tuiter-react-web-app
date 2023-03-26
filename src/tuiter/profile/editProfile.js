import React, {useState} from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {updateProfile} from "./profile-reducer";

const EditProfile = () => {
    let [userName, setUserName] = useState('');
    const dispatch = useDispatch();
    const saveClickHandler = () => {
        const newName = {
            "firstName": userName,
            "followersCount": 111,
        }
        dispatch(updateProfile(newName));
        console.log(userName);
    }

    return(
        <ul className="list-group">
            <li className="list-group-item">
                <div className="row">
                    <div className='col-1'>
                        <i className="bi bi-x"></i>
                    </div>
                    <div className='col-10 float-start'>
                        <span className="wd-title wd-margin-left-0">Edit profile</span>
                    </div>
                    <div className='col-1'>
                        <button onClick={saveClickHandler}
                                className="wd-save-button rounded-pill float-end wd-font-bold wd-content">Save</button>
                    </div>
                </div>

                <img className="wd-banner mt-2" src="/images/background.jpg"/>

                <div className="row">
                    <div className="col-3">
                        <img className="wd-pos-relative-nudge-up-right" src="/images/ying.jpg"/>
                    </div>
                </div>

                <label className="wd-appendfix">Name:</label><br/>
                <textarea value={userName}
                          placeholder="Ying Guo"
                          className="textarea-full"
                          onChange={(event) => setUserName(event.target.value)}>
                </textarea>


            </li>
        </ul>
    );
};

export default EditProfile;
