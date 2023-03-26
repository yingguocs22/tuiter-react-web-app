import React from "react";
// import whoArray from '../data/who.json';
import {useSelector} from "react-redux";
import ProfileItem from "./profileItem";

const Profile = () => {
    const infos = useSelector(
        state => state.pros);
    return(
        <ul className="list-group">
            {
                infos.map(info =>
                    <ProfileItem
                        key={info._id}
                        info={info}/>
                )
            }
        </ul>
    );
};

export default Profile;
