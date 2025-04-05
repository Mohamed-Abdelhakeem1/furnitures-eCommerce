import { createSlice } from "@reduxjs/toolkit";
import { Tproduct } from "../Types/Types";

const initialState: Tproduct[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.find(({ id }) => id === action.payload.id)) {
        const selectedElement = state.find(
          ({ id }) => id === action.payload.id
        );
        selectedElement!.quantity += 1;
        selectedElement!.totalPrice =
          selectedElement!.quantity * selectedElement!.price;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },
    reduceOne: (state, action) => {
      const selectedElement = state.find(({ id }) => id === action.payload.id);
      selectedElement!.quantity -= 1;
      selectedElement!.totalPrice =
        selectedElement!.quantity * selectedElement!.price;
      if (selectedElement!.quantity === 0) {
        return state.filter((el) => el.id !== selectedElement!.id);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const { addToCart, deleteFromCart, clearCart, reduceOne } =
  cartSlice.actions;

export default cartSlice.reducer;
