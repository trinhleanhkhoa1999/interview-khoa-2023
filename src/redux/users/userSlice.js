import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUser } from "./action";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const postSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(fetchAllUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(fetchAllUser.rejected, (state) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = postSlice.actions;

export default postSlice.reducer;
