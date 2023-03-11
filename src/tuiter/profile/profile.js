import React from "react";
// import whoArray from '../data/who.json';
import {useSelector} from "react-redux";
import ProfileItem from "./profileItem";

const Profile = () => {
    const infos = useSelector(
        (state) => state.profile);
    return(
        <ul className="list-group">
            {
                infos.map(info =>
                    <ProfileItem
                        key={info._id}
                        who={info}/>
                )
            }
        </ul>
    );
};

export default Profile;
