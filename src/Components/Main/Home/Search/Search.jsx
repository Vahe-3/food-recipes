import React, {useState} from "react";
import style from "./Search.module.css";
import {useNavigate} from "react-router-dom";

const Search = ({handleFilterCategories, getCategories}) => {

    const [text, setText] = useState("");
    const val = useNavigate();


    const handleText = (e) => {
        setText(e.target.value);
    };

    const handleSearch = (e) => {
        if ((e.key === "Enter") && text) {
            handleFilterCategories(text);
            val(`?search=${text}`);
        }

    };

    const handleSearchButton = () => {
        if (text) {
            handleFilterCategories(text);
            val(`?search=${text}`);
        }

    };


    return (
        <div className={style.search}>
            <div className="row">

                <div className="row">
                    <div className="input-field col s12">
                        <input id="search" value={text} onChange={handleText} onKeyDown={handleSearch}/>
                        <a className="waves-effect waves-light btn" onClick={handleSearchButton}><i
                            className="material-icons">search</i></a>

                    </div>
                </div>

            </div>
        </div>
    )
};

export default Search;