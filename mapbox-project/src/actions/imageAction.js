import { STATIC_IMAGE_FETCH_SUCCESS } from "../types/locationActionTypes";

const accessToken = process.env.REACT_APP_API_KEY;

export const fetchImage = (longitude, latitude, zoom) => {
  return (dispatch) => {
    const url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${longitude},${latitude},${zoom},0/500x500?access_token=${accessToken}`;
    dispatch({ type: STATIC_IMAGE_FETCH_SUCCESS, data: url });
  };
};
