import { SELECT_LOCATION_SUCCESS } from "../types/locationActionTypes";

export const onSelectLocation = (longitude, latitude, zoom) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_LOCATION_SUCCESS,
      latitude,
      longitude,
    });
  };
};
