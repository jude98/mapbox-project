import { STATIC_IMAGE_FETCH_SUCCESS } from "../types/locationActionTypes";

const initialState = {
  imageUrl: "",
  currentActionType: "",
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATIC_IMAGE_FETCH_SUCCESS:
      return {
        ...state,
        imageUrl: action.data,
        currentActionType: action.type,
      };
    default:
      return {
        ...state,
      };
  }
};

export default imageReducer;
