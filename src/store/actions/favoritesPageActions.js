


export const ADD_LOCATION_TO_FAVORITES = "FAVORITES_PAGE@ADD_LOCATION_TO_FAVORITES";
export const REMOVE_LOCATION_FROM_FAVORITES = "FAVORITES_PAGE@REMOVE_LOCATION_FROM_FAVORITES";

export const addLocationToFavorites = (locationData) => {
    return async (dispatch) => {
        try {
            dispatch({type: ADD_LOCATION_TO_FAVORITES, payload: locationData});
        } catch (e) {

        }
    }
};

export const removeLocationFromFavorites = (locationKey) => {
    return async (dispatch) => {
        try {
            dispatch({type: REMOVE_LOCATION_FROM_FAVORITES, payload: locationKey});
        } catch (e) {

        }
    }
};

