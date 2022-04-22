import React from "react";
import Meal from "./Meal/Meal";
import style from"./Meals.module.css";

const Meals = ({meals}) => {

    return (
        <div className={style.meals}>
            {
                meals.map(meal => <Meal key={meal.idMeal} {...meal} />)
            }
        </div>
    )
};

export default Meals;