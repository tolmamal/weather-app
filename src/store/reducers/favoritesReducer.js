import {ADD_LOCATION_TO_FAVORITES, REMOVE_LOCATION_FROM_FAVORITES} from "../actions/favoritesPageActions";


const initialState = {
    locations: []
};

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOCATION_TO_FAVORITES: {
            return {
                ...state,
                locations: [...state.locations, action.payload]
            };
        }
        case REMOVE_LOCATION_FROM_FAVORITES: {
            const {payload: cityKey} = action;
            return {
                ...state,
                locations: state.locations.filter(location => cityKey !== location.cityKey)
            };
        }
        default: {
            return state;
        }
    }
};

export default favoritesReducer;


