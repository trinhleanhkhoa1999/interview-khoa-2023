import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./post/postSlice";
import userSlice from "./users/userSlice";
import commentSlice from "./comment/commentSlice";

export const store = configureStore({
  reducer: {
    listPost: postSlice,
    user: userSlice,
    comment: commentSlice,
  },
});
