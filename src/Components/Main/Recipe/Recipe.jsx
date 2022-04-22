import React, {useEffect} from "react";
import style from "./Recipe.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getRecipeThunk} from "../../../Store/RecipeSlice";
import {useParams} from "react-router-dom";
import RecipeItem from "./RecipeItem/RecipeItem";
import Preloader from "../../Preloader/Preloader";
import Nav from "../../Nav/Nav";

const Recipe = () => {

    const {recipe, isLoading} = useSelector(state => state.recipe);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {

        dispatch(getRecipeThunk(id))
    }, [])

    if(isLoading){
        return <Preloader />
    }




    return (
        <>
            <Nav />
        <div className={style.recipe}>
            <RecipeItem {...recipe[0]} />
        </div>

        </>
    )
};

export default Recipe;