import style from "./Header.module.css";
import {Link} from "react-router-dom";
import logo from "../../Logo/logo.jpg";

const Header = () => {

    return (
        <div className="Header">

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

        </div>
    )
};

export default Header;