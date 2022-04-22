
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <BrowserRouter basename="/food-recipes">
                <Header/>

                <Main/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
