import { combineReducers} from "redux";
import homePageReducer from "./reducers/homePageReducer";
import favoritesReducer from "./reducers/favoritesReducer";

const rootReducer = combineReducers({
   homePage: homePageReducer,
   favorites: favoritesReducer
});

export default rootReducer;
