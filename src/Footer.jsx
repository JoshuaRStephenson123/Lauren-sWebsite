import React from "react";
import "../dist/css/stylesheet.css";

function Footer () {
    return(
        <div className="footer">
            <nav className="footer__nav">
                <a className="footer__nav__item">Home</a>
                <a className="footer__nav__item">Products</a>
                <a className="footer__nav__item">About Us</a>
                <a className="footer__nav__item">Contact Us</a>
            </nav>
            <div className="footer__social-links">
                <ul className="footer__social-links__list">
                    <li className="footer__social-links__list__icon"><a className="footer__social-links__list__icon__link"><i className="fa-brands fa-instagram"></i></a></li>
                    <li className="footer__social-links__list__icon"><a className="footer__social-links__list__icon__link"><i className="fa-brands fa-square-facebook"></i></a></li>
                    <li className="footer__social-links__list__icon"><a className="footer__social-links__list__icon__link"><i className="fa-brands fa-etsy"></i></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer