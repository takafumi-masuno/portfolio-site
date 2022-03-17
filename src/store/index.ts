import { createStore } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

export default store;
