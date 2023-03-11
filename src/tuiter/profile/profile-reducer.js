import { createSlice } from "@reduxjs/toolkit";
import infos from './myInfo.json';

const profileSlice = createSlice({
    name: 'profile',
    initialState: infos,
});
export default profileSlice.reducer;