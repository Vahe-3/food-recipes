import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { getAllCategories } from "../Api/api";



export const getCategoriesThunk = createAsyncThunk(

    'home/getCategoriesThunk',

    async function () {

        const response = await getAllCategories();

        return response.data.categories;

    }
);


const homeSlice = createSlice({
    name: "home",
    initialState: {
        categories: [],
        isLoading: false,
    },

    reducers: {
        filterCategories(state, action) {

            state.categories = state.categories.filter(category => {
                return category.strCategory.toLowerCase().includes(action.payload);
            })

        }
    },

    extraReducers:{
        [getCategoriesThunk.pending]: (state, action) => {

            state.isLoading = true;

        },

        [getCategoriesThunk.fulfilled]: (state, action) => {

            state.isLoading = false;
            state.categories = action.payload;

        },


        [getCategoriesThunk.rejected]: (state, action) => {

        },
    }
});

export const {filterCategories} = homeSlice.actions;
export default homeSlice.reducer;