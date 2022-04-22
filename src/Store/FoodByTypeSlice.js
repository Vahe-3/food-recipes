import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getFilteredCategory} from "../Api/api";




export const getFoodByTypeThunk = createAsyncThunk(

    'foodByType/getFoodByTypeThunk',

    async function (name) {

        const response = await getFilteredCategory(name);

        return response.data.meals;

    }
);


const foodByTypeSlice = createSlice({
    name: "foodByType",
    initialState: {
        meals: [],
        isLoading: false,
    },

    reducers: {

    },

    extraReducers:{
        [getFoodByTypeThunk.pending]: (state, action) => {

            state.isLoading = true;

        },

        [getFoodByTypeThunk.fulfilled]: (state, action) => {

            state.isLoading = false;
            state.meals = action.payload;

        },


        [getFoodByTypeThunk.rejected]: (state, action) => {

            

        },
    }
});


export default foodByTypeSlice.reducer;