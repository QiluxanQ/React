
import s from './navBar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={s.item} >Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={s.item}>Mesegess </NavLink>
            </div>
            <div className={s.item}>
                <a> Music </a>
            </div>
            <div className={s.item}>
                <a>Setings </a>
            </div>
        </nav>
    )
}
export default Navbar;