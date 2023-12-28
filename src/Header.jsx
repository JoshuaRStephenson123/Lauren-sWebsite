import Logo from "./assets/logo.png";


function Header (){
    return(
        <>
        <div className="header">
            <h1 className="header__title">Creation Corner</h1>
            <img className="header__logo" src={Logo} />
        </div>
        <nav className="header-nav">
            <div className="header-nav__border">
                <a href="#" className="header-nav__item">Home</a>
            </div>
            <div className="header-nav__border">
                <a href="#" className="header-nav__item">Products</a>
            </div>
            
            <div className="header-nav__border">
                <a href="#" className="header-nav__item">About us</a>
            </div>
            <div className="header-nav__border">
                <a href="#" className="header-nav__item">Contact Us</a>
            </div>
        </nav>
        </>
    )
}
export default Header;
