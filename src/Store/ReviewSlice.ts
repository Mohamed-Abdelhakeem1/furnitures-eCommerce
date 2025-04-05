import { createSlice } from "@reduxjs/toolkit";
import { Tproduct } from "../Types/Types";

type TReview = {
  case: "Shown" | "Hidden";
  preview?: Tproduct;
};

const initialState: TReview = {
  case: "Hidden",
};

const ReviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    show: (state, action) => {
      state.case = "Shown";
      state.preview = action.payload;
    },
    hide: (state) => {
      state.case = "Hidden";
      state!.preview = undefined;
    },
  },
});

export const { show, hide } = ReviewSlice.actions;

export default ReviewSlice.reducer;
