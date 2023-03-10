import { createSlice } from "@reduxjs/toolkit";
import homes from './a7_homePosts.json';

const homeSlice = createSlice({ name: 'homes',
    initialState: homes
});
export default homeSlice.reducer;