/**
 * Reducers: They are used to give the next state of the app given an action
 * an its payload
 */

import { CHANGE_TEXT } from "../actionTypes";

// Initial State of the App
const initialState = {
  text: "",
};

// Reducer
const changeText = (state = initialState, action) => {
  console.log("Reducer called");
  switch (action.type) {
    case CHANGE_TEXT:
      const { text } = action.payload;
      return {
        ...state,
        text: text,
      };
    default:
      return state;
  }
};

export default changeText;
