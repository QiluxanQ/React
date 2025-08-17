import './App.css';
import Header from "./companents/Header/Header";
import NavBar from "./companents/NavBar/navBar";
import Profile from "./companents/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./companents/Dialogs/Messages/DialogContainer";
import UsersContainer from "./companents/Users/UsersContainer";

const App = (props) => {

    return (

            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/dialogs' element={<DialogsContainer  />}/>
                        <Route path='/users' element={<UsersContainer />}/>
                    </Routes>
                </div>
            </div>

    );
}

export default App;

