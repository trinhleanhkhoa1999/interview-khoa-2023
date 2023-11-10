import { createSlice } from "@reduxjs/toolkit";
import { fetchAllListPost } from "./action";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const postSlice = createSlice({
  name: "listPost",
  initialState,
  reducers: {
    test: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllListPost.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(fetchAllListPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(fetchAllListPost.rejected, (state) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = postSlice.actions;

export default postSlice.reducer;
