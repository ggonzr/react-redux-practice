/**
 * Actions to dispatch
 */

import { CHANGE_TEXT } from "./actionTypes";

export const changeText = (text) => ({
  type: CHANGE_TEXT,
  payload: { text: text },
});
