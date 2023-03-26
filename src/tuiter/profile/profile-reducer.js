import { createSlice } from "@reduxjs/toolkit";
import infos from './myInfo.json';

const profileSlice = createSlice({
    name: 'profile',
    initialState: infos,
    reducers: {
        updateProfile(state, action) {
            state.unshift({
                ...action.payload,
            })
        },
    }
});
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;