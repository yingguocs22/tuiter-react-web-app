import { createSlice } from "@reduxjs/toolkit";
import infos from './myInfo.json';

const templatePro = {
    "handle": "@yingguo",
    "profilePicture": "ying.jpg",
    "bannerPicture": "background.jpg",
    "dateJoined": "9/2021",
    "followingCount": 340,
    "followersCount": 223
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: infos,
    reducers: {
        updateProfile(state, action) {
            state.unshift({
                ...action.payload,
                ...templatePro,
            })
        },
        deleteProfile(state) {
            state.splice(1, 1)
        }
    }
});
export const {updateProfile, deleteProfile} = profileSlice.actions;
export default profileSlice.reducer;