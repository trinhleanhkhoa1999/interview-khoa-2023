import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const fetchAllListComment = createAsyncThunk(
  "fetchAllListComment",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return response.data;
  }
);
