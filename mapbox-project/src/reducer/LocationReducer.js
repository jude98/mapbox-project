import { SELECT_LOCATION_SUCCESS } from "../types/locationActionTypes";

const initialState = {
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 8,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LOCATION_SUCCESS:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
        zoom: action.zoom,
      };
    default:
      return {
        ...state,
      };
  }
};

export default locationReducer;
