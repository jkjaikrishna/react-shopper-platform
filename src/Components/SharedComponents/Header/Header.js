import React from 'react';


import MainHeader from './MainHeader/MainHeader';
import './Header.css';

const Header = () => {
    return (
        <header className= "header-area clearfix">
            <div className="header-padding-2 d-none d-lg-block header-top-area border-none">
                <div className="container-fluid">
                    <div className="header-top-wap border-bottom">
                        <div className="language-currency-wrap">
                            <div className="same-language-currency language-style">
                                <span>English <i className="fa fa-angle-down"></i></span>
                                <div className="lang-car-dropdown">
                                    <ul>
                                        <li><button value="en">English</button></li>
                                        <li><button value="fn">French</button></li>
                                        <li><button value="de">Germany</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="same-language-currency use-style">
                                <span>USD <i className="fa fa-angle-down"></i></span>
                                <div className="lang-car-dropdown">
                                    <ul>
                                        <li><button value="USD">USD</button></li>
                                        <li><button value="EUR">EUR</button></li>
                                        <li><button value="GBP">GBP</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="same-language-currency">
                                <p>Call Us +91 94470 93813</p>
                            </div>
                        </div>
                        <div className="header-offer">
                            <p>For Support mail at <span>smiles@slanand.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <MainHeader />
        </header>
    );
}

export default Header;