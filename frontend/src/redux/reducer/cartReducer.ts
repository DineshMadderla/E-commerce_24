import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartReducerInitialState } from "../../types/reducer-types";
import { CartItem, ShippingInfo } from "../../types/types";

// Load Cart Items and Shipping Info from Local Storage
const initialState: CartReducerInitialState = {
  loading: false,
  cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
  subtotal: 0,
  tax: 0,
  shippingCharges: 0,
  discount: 0,
  total: 0,
  shippingInfo: JSON.parse(localStorage.getItem("shippingInfo") || "{}") || {
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  },
};

export const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.loading = true;
      const index = state.cartItems.findIndex(
        (i) => i.productId === action.payload.productId
      );

      if (index !== -1) {
        state.cartItems[index] = action.payload;
      } else {
        state.cartItems.push(action.payload);
      }

      // Save updated cart to local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      state.loading = false;
    },

    removeCartItem: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.cartItems = state.cartItems.filter(
        (i) => i.productId !== action.payload
      );

      // Save updated cart to local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      state.loading = false;
    },

    calculatePrice: (state) => {
      const subtotal = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      state.subtotal = subtotal;
      state.shippingCharges = state.subtotal > 1000 ? 0 : 200;
      state.tax = Math.round(state.subtotal * 0.18);
      state.total =
        state.subtotal + state.tax + state.shippingCharges - state.discount;
    },

    discountApplied: (state, action: PayloadAction<number>) => {
      state.discount = action.payload;
    },

    saveShippingInfo: (state, action: PayloadAction<ShippingInfo>) => {
      state.shippingInfo = action.payload;

      // Save shipping info to local storage
      localStorage.setItem("shippingInfo", JSON.stringify(state.shippingInfo));
    },

    resetCart: () => {
      // Clear local storage and reset state
      localStorage.removeItem("cartItems");
      localStorage.removeItem("shippingInfo");
      return initialState;
    },
  },
});

export const {
  addToCart,
  removeCartItem,
  calculatePrice,
  discountApplied,
  saveShippingInfo,
  resetCart,
} = cartReducer.actions;

export default cartReducer.reducer;
