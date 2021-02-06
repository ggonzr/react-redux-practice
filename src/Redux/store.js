/**
 * Store: Here, we retrieve the reducers and the initial state to create the store object.
 */

import { createStore } from "redux";

// Import our reducers
import reducers from "./Reducers";

// Create the store
export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
