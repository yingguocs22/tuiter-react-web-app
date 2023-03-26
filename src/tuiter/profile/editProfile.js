import React, {useState} from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {updateProfile, deleteProfile} from "./profile-reducer";
import {useNavigate} from "react-router";

const EditProfile = () => {
    // save and nagivate to profile
    const navigate = useNavigate();
    const navigateProfile = () => {
        navigate('../profile-a7');
    };

    let [userName, setUserName] = useState('');
    let [userBio, setUserBio] = useState('');
    let [userLocation, setUserLocation] = useState('');
    let [userWebsite, setUserWebsite] = useState('');
    let [userBirthDate, setUserBirthDate] = useState('');
    const dispatch = useDispatch();
    const deleteOldProfile = () => {
        console.log("delete")
        dispatch(deleteProfile());
    }

    const saveClickHandler = () => {
        console.log(userName);
        console.log(userBio);
        console.log(userLocation);
        console.log(userWebsite);
        const newProfile = {
            name: userName,
            bio: userBio,
            location: userLocation,
            website:userWebsite,
            dateOfBirth: userBirthDate
        }
        dispatch(updateProfile(newProfile));

        deleteOldProfile();
        navigateProfile();
    }

    return(
        <ul className="list-group">
            <li className="list-group-item">
                <div className="row">
                    <div className='col-1'>
                        <i onClick={navigateProfile} className="bi bi-x"></i>
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

                <label className="wd-appendfix">Bio:</label><br/>
                <textarea value={userBio}
                          placeholder="About yourself"
                          className="textarea-full"
                          onChange={(event) => setUserBio(event.target.value)}>
                </textarea>

                <label className="wd-appendfix">Location:</label><br/>
                <textarea value={userLocation}
                          placeholder="Your location"
                          className="textarea-full"
                          onChange={(event) => setUserLocation(event.target.value)}>
                </textarea>

                <label className="wd-appendfix" for="input-website">Website:</label><br/>
                <input type="website"
                       value={userWebsite}
                       id="input-website"
                       placeholder="Your website"
                       className="textarea-full"
                       onChange={(event) => setUserWebsite(event.target.value)}>
                </input>

                <label className="wd-appendfix" for="text-fields-dob">Birth Date:</label><br/>
                <input type="date"
                       value={userBirthDate}
                       id="text-fields-dob"
                       onChange={(event) => setUserBirthDate(event.target.value)}/><br/><br/>

                <div className='row'>
                    <span className='col-11'>Switch to professional</span>
                    <i className="bi bi-arrow-right col-1"></i>
                </div>
            </li>
        </ul>
    );
};

export default EditProfile;
