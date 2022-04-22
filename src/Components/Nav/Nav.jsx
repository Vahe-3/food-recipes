import React, {useEffect} from "react";
import style from "./Nav.module.css";

import {useParams} from "react-router-dom";

const Nav = () => {


    const goBack = () => {
        window.history.back()
    }



    return (
        <div className={style.nav}>
            <a onClick={goBack} className="waves-effect waves-light btn red"> <i className="material-icons">arrow_back</i></a>
        </div>
    )
};

export default Nav;