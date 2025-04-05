import { createSlice } from "@reduxjs/toolkit";
import { Tproduct } from "../Types/Types";

const initialState: Tproduct[] = [];

const WishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWish: (state, action) => {
      state.push(action.payload);
    },
    deleteFromWish: (state, action) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
    clearWish: () => {
      return initialState;
    },
  },
});

export const { addToWish, deleteFromWish, clearWish } = WishSlice.actions;

export default WishSlice.reducer;
