import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import Home from "./Home";
import { filterCategories, getCategoriesThunk} from './../../../Store/HomeSlice';
import Preloader from "../../Preloader/Preloader";
import Search from "./../Search/Search"
import {useLocation, useParams} from "react-router-dom";

const HomeContainer = () => {

    const {categories, isLoading} = useSelector(state => state.home);
    const dispatch = useDispatch();
    const {search} = useLocation();

    const searchText = search.split('=')




    const handleFilterCategories = (text) => {
        dispatch(filterCategories(text));
    }

    const getCategories = () => {
        dispatch(getCategoriesThunk()).then(resp => {
            if(searchText[1]){
                handleFilterCategories(searchText[1])
            }
        });


    }

    useEffect(() => {

        getCategories();


    }, [search]);


    if(isLoading){

       return <Preloader />
    }


    return (
        <div>
            <Search handleFilterCategories={handleFilterCategories} getCategories={getCategories} />
            <Home categories={categories} isLoading={isLoading} />

        </div>
    )
};

export default HomeContainer;