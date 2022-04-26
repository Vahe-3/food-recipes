import {configureStore} from "@reduxjs/toolkit";
import homeReducer from "./HomeSlice";
import foodByTypeReducer from "./FoodByTypeSlice";
import {recipeSliceReducer} from "./RecipeSlice";

const store = configureStore({
    reducer: {
        home: homeReducer,
        foodByType: foodByTypeReducer,
        recipe: recipeSliceReducer,
    }
});


export default  store;


 
