import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getFoodByTypeThunk} from "../../../Store/FoodByTypeSlice";
import Preloader from "../../Preloader/Preloader";
import Meals from "./Meals/Meals";
import style from "./FoodByType.module.css"
import Nav from "../../Nav/Nav";

const FoodByType = () => {

    const {name} = useParams();
    const dispatch = useDispatch();

    const {meals, isLoading} = useSelector(state => state.foodByType);


    useEffect(() => {

        dispatch(getFoodByTypeThunk(name));
        window.scroll(0, 0);

    }, [name]);

    if (isLoading) {
        return <Preloader/>
    }


    return (
        <>
            <Nav/>
            <div className={style.foodByType}>
                <Meals meals={meals}/>
            </div>
        </>
    )
};

export default FoodByType;