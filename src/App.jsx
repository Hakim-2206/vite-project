import Home from "./pages/Home.jsx";
import {Routes, Route} from "react-router";
import MentionsLegalesPage from "./pages/MentionsLegalesPage.jsx";
import PolitiqueConfidentialitePage from "./pages/PolitiqueConfidentialitePage.jsx";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/*
import ScrollToTop from "./ScrollToTop.js";
*/

const App = () => {

    return (
        <div>
            {/*<ScrollToTop/>*/}
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/mentions-legales"} element={<MentionsLegalesPage/>}/>
                <Route path={"/politique-confidentialite"} element={<PolitiqueConfidentialitePage/>}/>
            </Routes>
            <ToastContainer autoClose={2500}/>
        </div>
    );
}

export default App;