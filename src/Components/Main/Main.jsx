import {Routes, Route, useParams} from "react-router-dom";
import HomeContainer from "./Home/HomeContaner";
import About from "./About/About";
import Contact from "./Contact/Contact";
import {useSelector} from "react-redux";
import Preloader from "../Preloader/Preloader";
import FoodByType from "./FoodByType/FoodByType";
import Recipe from "./Recipe/Recipe";


const Main = () => {

   const {isLoading} = useSelector(state => state.home);

    return (
        <div className="Main">

            <Routes>
                <Route path="/" element={<HomeContainer />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/foodbytype/:name" element={<FoodByType />} />
                <Route path="/recipe/:id" element={<Recipe />} />
                <Route path="*" element={<h1>Page Not found</h1>} />
            </Routes>

        </div>
    )
};

export default Main;