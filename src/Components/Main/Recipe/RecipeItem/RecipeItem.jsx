import React, {useEffect} from "react";
import style from "./RecipeItem.module.css";
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients";


const RecipeItem = ({idMeal, strMealThumb, strMeal, strCategory, strArea, strInstructions, strYoutube, ...props }) => {

    useEffect(() => {
        window.scroll(0, 0);


    }, [])

    const toVideo = () => {
        window.scroll(0, 980);
    }

    return (

        <div className={style.recipeItem}>
            <div className={style.recipeInfo}>
                <div>
                    <h3>{strMeal}</h3>
                    <img src={strMealThumb}/>
                    <div className={style.recipeInfoItem}>
                        <h5>{strCategory + " , " + (strArea ? strArea : "")}</h5>
                        {
                            strYoutube ?  <a onClick={() => toVideo()} className="waves-effect waves-light btn large">video
                            instruction</a> : null}
                    </div>

                </div>

                <div className={style.cookingInstructions}>
                    <h4>Cooking instructions</h4>
                    <p>{strInstructions}</p>
                </div>

            </div>

            <h3 className={style.title}>Video instruction</h3>

            {
                strYoutube ?  <div className={style.recipeVideo}>

                    <iframe width="1280" height="720" src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}  allowFullScreen>


                    </iframe>

                </div> : null
            }



            <RecipeIngredients {...props} />


        </div>


    )
};

export default RecipeItem;