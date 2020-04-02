import React from 'react';

import Logo from './Logo/Logo';
import MainNav from './MainNav/MainNav';
import SearchSection from './SearchSection/SearchSection';
import AccountSettings from './AccountSettings/AccountSettings';
import MobileNavbar from './MobileNavbar/MobileNavbar';
import CompareSection from './CompareSection/CompareSection';
import WishListSection from './WishListSection/WishListSection';
import CartSection from './CartSection/CartSection';


const MainHeader = () => {
    return (
        <div className="header-padding-2 sticky-bar header-res-padding clearfix">
            <div className="container-fluid">
                <div className="row">
                    <Logo />
                    <MainNav />
                    <div className="col-xl-2 col-lg-2 col-md-6 col-8">
                        <div className="header-right-wrap">
                            <SearchSection />
                            <AccountSettings />
                            <CompareSection />
                            <WishListSection />
                            <CartSection />
                            <div className="same-style mobile-off-canvas d-block d-lg-none">
                                <button className="mobile-aside-button">
                                    <i className="pe-7s-menu"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileNavbar />
        </div>
    )
}

export default MainHeader;