import style from "./HeaderAdditional.module.css";
import logo from "../../../Logo/logo.jpg"
import {Link} from "react-router-dom";

const HeaderAdditional = () => {
    return (
        <header className={style.HeaderAdditional}>
            <Link to="/">
            <div className={style.logo}>
                <img src={logo}/>
            </div>
            <div className={style.title}>
                <h1><b>BEST FOOD</b></h1>
            </div>
            </Link>

            <div></div>


        </header>
    )
};

export default HeaderAdditional;

