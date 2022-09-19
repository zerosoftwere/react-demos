import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    showCounter: true,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    increaseBy: (state, action) => {
      state.value = state.value + action.payload;
    },
    clear: (state) => {
      state.value = 0;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, clear, increaseBy, toggle } =
  counterSlice.actions;

export default counterSlice.reducer;
