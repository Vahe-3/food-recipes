import React from 'react';

import style from './CategoriesItem.module.css';
import {Link} from "react-router-dom";

const CategoriesItem = ({idCategory,strCategoryThumb, strCategoryDescription, strCategory }) => {

    return (
        <div className={style.categoriesItem}>
            <div className="card">
                <div className="card-image">
                    <img src={strCategoryThumb} />

                </div>
                <span className={`card-title ${style.span}`}><b>{strCategory}</b></span>
                <div className="card-content">
                    <p>{strCategoryDescription.slice(0,100) + " ..."}</p>
                </div>
                <div className="card-action">
                    <Link to ={`/foodbytype/${strCategory}`}>see category</Link>
                </div>
            </div>
        </div>
    )
}



export default CategoriesItem;