import './styles/styles.scss'
import {MainPage} from "./pages/MainPage.jsx";
import {ProjectsPage} from "./pages/ProjectsPage.jsx";
import {Route, Routes} from "react-router-dom";
import {Footer} from "./partials/Footer.jsx";

function App() {
    // const {t} = useTranslation()

    return (
        <>
            <div className={'cover'}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/projects'} element={<ProjectsPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </>
    )
}

export default App
