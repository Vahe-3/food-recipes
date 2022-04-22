import {configureStore} from "@reduxjs/toolkit";
import homeReducer from "./HomeSlice";
import foodByTypeReducer from "./FoodByTypeSlice"
import {recipeSliceReducer} from "./RecipeSlice";

const store = configureStore({
    reducer: {
        home: homeReducer,
        foodByType: foodByTypeReducer,
        recipe: recipeSliceReducer,
    }
});

window.store = store.getState()

export default  store;


 
