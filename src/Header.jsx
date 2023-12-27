import Logo from "./assets/logo.png";


function Header (){
    return(
        <>
        <div className="header">
            <h1 className="header__title">Web Title Goes Here</h1>
            <img className="header__logo" src={Logo} />
        </div>
        <nav className="header-nav">
            <a href="#" className="header-nav__item">Home</a>
            <a href="#" className="header-nav__item">Products</a>
            <a href="#" className="header-nav__item">About us</a>
            <a href="#" className="header-nav__item">Contact Us</a>
        </nav>
        </>
    )
}
export default Header;
