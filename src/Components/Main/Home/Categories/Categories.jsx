import React from 'react';
import style from "./Categories.module.css";
import CategoriesItem from './CategoriesItem/CategoriesItem';

const Categories = ({categories}) => {

    return (

        <div className={style.categories}>
            {
                categories.map((category) => <CategoriesItem key={category.idCategory} {...category}/>)
            }
        </div>
    )
};


export default Categories;