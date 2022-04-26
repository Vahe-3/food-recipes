import React from "react";
import style from "./RecipeIngredients.module.css"


const RecipeIngredients = (props) => {

    const ingredients = Object.keys(props).filter(key => {
        return props[key] && key.includes("Ingredient");
    }).map(key => {
        return <div key={key}>{props[key]}</div>
    });

    const measures = Object.keys(props).filter(key => {
        return props[key] && key.includes("Measure");
    }).map(key => {
        return <div key={key}>{props[key]}</div>
    });


    return (
        <>
            <h3 className={style.title}>Ingredients</h3>
            <div className={style.recipeIngredients}>

                <div className={style.ingredients}>
                    <h4>Ingredients</h4>
                    {
                        ingredients
                    }
                </div>

                <div className={style.measures}>
                    <h4>Measures</h4>
                    {
                        measures
                    }
                </div>

            </div>
        </>
    )
};

export default RecipeIngredients;