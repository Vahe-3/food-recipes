import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {filterCategories, getCategoriesThunk} from '../../../Store/HomeSlice';
import Preloader from "../../Preloader/Preloader";
import Search from "./Search/Search";
import {useLocation} from "react-router-dom";
import Categories from "./Categories/Categories";
import style from "./Home.module.css";

const Home = () => {

    const {categories, isLoading} = useSelector(state => state.home);
    const dispatch = useDispatch();
    const {search} = useLocation();

    const searchText = search.split('=');


    const handleFilterCategories = (text) => {
        dispatch(filterCategories(text));
    };

    const getCategories = () => {
        dispatch(getCategoriesThunk()).then(resp => {
            if (searchText[1]) {
                handleFilterCategories(searchText[1]);
            }
        });


    };

    useEffect(() => {

        getCategories();



    }, [search]);


    if (isLoading) {

        return <Preloader/>
    }


    return (
        <div className={style.home}>
            <Search handleFilterCategories={handleFilterCategories} getCategories={getCategories}/>
            <Categories categories={categories}/>

        </div>
    )
};

export default Home;