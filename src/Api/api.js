import axios from "axios";

const API_KEY = "1";


const instance = axios.create({

    baseURL: `https://www.themealdb.com/api/json/v1/${API_KEY}/`,

});

const getMealById =  (mealId) => {
    return  instance.get("lookup.php?i=" + mealId);
};

const getAllCategories = () => {
    return instance.get("categories.php");
};

const getFilteredCategory = (name) => {
    return instance.get("filter.php?c=" + name);
};

export {getMealById, getAllCategories, getFilteredCategory};


