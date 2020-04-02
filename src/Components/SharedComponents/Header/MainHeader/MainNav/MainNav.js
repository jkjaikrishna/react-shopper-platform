import React from 'react';

const MainNav = () => {
    return (
        <div className="col-xl-8 col-lg-8 d-none d-lg-block">
            <div className="main-menu">
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home
                                {/* <i className="fa fa-angle-down"></i> */}
                            </a>
                            {/* <ul className="mega-menu mega-menu-padding">
                                <li>
                                    <ul>
                                        <li className="mega-menu-title"><a href="/flone/">Home Group One</a></li>
                                        <li><a href="/flone/home-fashion">Home Fashion</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li className="mega-menu-title"><a href="/flone/">Home Group Two</a></li>
                                        <li><a href="/flone/home-furniture-two">Home Furniture Two</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li className="mega-menu-title"><a href="/flone/">Home Group Three</a></li>
                                        <li><a href="/flone/home-grid-banner">Home Grid Banner</a></li>
                                    </ul>
                                </li>
                            </ul> */}
                        </li>
                        <li>
                            <a href="/products"> ShowCase 
                                {/* <i className="fa fa-angle-down"></i> */}
                            </a>
                            {/* <ul className="mega-menu">
                                <li>
                                    <ul>
                                        <li className="mega-menu-title"><a href="/flone/shop-grid-standard">Shop Layout</a></li>
                                        <li><a href="/flone/shop-grid-standard">Shop Grid Standard</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li className="mega-menu-title"><a href="/flone/product/1">Product Details</a></li>
                                        <li><a href="/flone/product/1">Product Tab Bottom</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li className="mega-menu-img">
                                            <a href="/flone/shop-grid-standard"><img src="/flone/assets/img/banner/banner-12.png" alt="" /></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul> */}
                        </li>
                        <li><a href="#">Collection</a></li>
                        <li><a href="#">Pages
                            {/* <i className="fa fa-angle-down"></i> */}
                        </a>
                            <ul className="submenu">
                                <li><a href="/flone/cart">Cart</a></li>
                                <li><a href="/flone/checkout">Checkout</a></li>
                                <li><a href="/flone/wishlist">Wishlist</a></li>
                                <li><a href="/flone/compare">Compare</a></li>
                                <li><a href="/flone/my-account">My Account</a></li>
                                <li><a href="/flone/login-register">Login / Register</a></li>
                                <li><a href="/flone/about">About Us</a></li>
                                <li><a href="/flone/contact">Contact Us</a></li>
                                <li><a href="/flone/not-found">404 Page</a></li>
                            </ul>
                        </li>
                        {/* <li>
                            <a href="/flone/blog-standard">Blog<i className="fa fa-angle-down"></i></a>
                            <ul className="submenu">
                                <li><a href="/flone/blog-standard">Blog Standard</a></li>
                            </ul>
                        </li> */}
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MainNav;