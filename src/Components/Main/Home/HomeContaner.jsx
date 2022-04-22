import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import Home from "./Home";
import {addCategories, getCategoriesThunk} from './../../../Store/HomeSlice';
import Preloader from "../../Preloader/Preloader";


const HomeContainer = () => {

    const {categories, isLoading} = useSelector(state => state.home);
    const dispatch = useDispatch();

    useEffect(() => {

            dispatch(getCategoriesThunk());

    }, [])   

    if(isLoading){

       return <Preloader />
    }


    return (
        <div>
            
            <Home categories={categories} isLoading={isLoading} />

        </div>
    )
};

export default HomeContainer;