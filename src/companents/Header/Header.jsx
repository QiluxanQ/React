import h from './Header.module.css'

const Header = () => {
    return (
        <div className={h.header}>
            <header className="header">
                <img className={h.img} src='https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg'/>
            </header>
        </div>
    )
}
export default Header;