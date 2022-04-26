import React, {useEffect} from "react";
import Meal from "./Meal/Meal";
import style from "./Meals.module.css";

const Meals = ({meals}) => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <div className={style.meals}>
            {
                meals.map(meal => <Meal key={meal.idMeal} {...meal} />)
            }
        </div>
    )
};

export default Meals;