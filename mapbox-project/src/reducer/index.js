import locationReducer from "./LocationReducer";
import imageReducer from "./imageReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  location: locationReducer,
  image: imageReducer,
});

export default rootReducer;
