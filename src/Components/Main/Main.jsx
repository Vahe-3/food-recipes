import {Routes, Route, useParams} from "react-router-dom";
import Home from "./Home/Home";
import FoodByType from "./FoodByType/FoodByType";
import Recipe from "./Recipe/Recipe";

const Main = () => {

    return (
        <div className="Main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/foodbytype/:name" element={<FoodByType/>}/>
                <Route path="/recipe/:id" element={<Recipe/>}/>
                <Route path="*" element={<h1>Page Not found</h1>}/>
            </Routes>
        </div>
    )
};

export default Main;