import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlise";
import WishSlice from "./WishSlice";
import ReviewSlice from "./ReviewSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    CartProducts: cartSlice,
    WishProducts: WishSlice,
    ReviewState: ReviewSlice,
  },
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
