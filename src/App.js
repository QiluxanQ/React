import './App.css';
import Header from "./companents/Header";
import NavBar from "./companents/navBar";
import Profile from "./companents/Profile";


const  App = () => {
  return (
    <div className="app-wrapper">
            <Header />
            <NavBar />
            <Profile />
    </div>
  );
}

export default App;

