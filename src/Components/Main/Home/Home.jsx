import Preloader from "../../Preloader/Preloader";
import Categories from "./Categories/Categories";
import style from "./Home.module.css"


const Home = ({categories, isLoading}) => {


    return (
        <div className={style.home}>
            <Categories categories={categories} />
        </div>
    )
};

export default Home;