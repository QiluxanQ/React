import './App.css';
import Header from "./companents/Header/Header";
import NavBar from "./companents/NavBar/navBar";
import Profile from "./companents/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./companents/Dialogs/Messages/DialogContainer";

const App = (props) => {

    return (

            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/dialogs' element={<DialogsContainer  />}/>
                    </Routes>
                </div>
            </div>

    );
}

export default App;

