import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAllCategories, getMealById} from "../Api/api";

const getRecipeThunk = createAsyncThunk(

    'recipe/getRecipeThunk',

    async function (id) {

        const response = await getMealById((id));

        return response.data.meals;

    }
);

const recipeSlice = createSlice({
    name: "recipe",
    initialState: {
        recipe: [],
        isLoading: false
    },

    extraReducers: {
        [getRecipeThunk.pending]: (state, action) => {

            state.isLoading = true;
        },

        [getRecipeThunk.fulfilled]: (state, action) => {
            state.recipe = action.payload;
            state.isLoading = false;
        },

        [getRecipeThunk.rejected]: (state, action) => {

        },


    }

});

const recipeSliceReducer = recipeSlice.reducer;

export {
    recipeSliceReducer,
    getRecipeThunk,
}

