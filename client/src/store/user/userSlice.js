import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: { currentUser: null },
  reducers: {
    getUser: (state, action) => {
      state.currentUser = action.payload;
    },
    deleteUser: (state, action) => {
      state.currentUser = null;
    },
  },
});
export const userAction = userSlice.actions;
export default userSlice.reducer;
