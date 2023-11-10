import { createSlice } from "@reduxjs/toolkit";
import { fetchAllListComment } from "./action";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const commentSlice = createSlice({
  name: "commentPost",
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
      .addCase(fetchAllListComment.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(fetchAllListComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(fetchAllListComment.rejected, (state) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = commentSlice.actions;

export default commentSlice.reducer;
