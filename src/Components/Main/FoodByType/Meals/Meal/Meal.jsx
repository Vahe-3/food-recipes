import React from "react";
import style from "./Meal.module.css"
import {Link,} from "react-router-dom";

const Meal = ({idMeal, strMeal, strMealThumb}) => {

    return (
        <div>
            <div className={`card  + ${style.card}`}>
                <div className="card-image">
                    <img src={strMealThumb}/>

                </div>
                <span className={`card-title ${style.span}`}>
                    <b>{(strMeal.length > 20) ? strMeal.slice(0, 20) + "..." : strMeal}</b>
                </span>

                <div className="card-action">
                    <Link to={`/recipe/${idMeal}`}>see the recipe</Link>
                </div>
            </div>
        </div>
    )
};

export default Meal;