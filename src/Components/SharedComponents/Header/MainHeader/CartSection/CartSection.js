import React, { Fragment } from 'react';

const CartSection = () => {
    return (
        <Fragment>
            <div className="same-style cart-wrap d-none d-lg-block">
                <button className="icon-cart"><i className="pe-7s-shopbag"></i>
                    <span className="count-style">0</span>
                </button>
                <div className="shopping-cart-content">
                    <p className="text-center">No items added to cart</p>
                </div>
            </div>
            <div className="same-style cart-wrap d-block d-lg-none">
                <a className="icon-cart" href="/flone/cart"><i className="pe-7s-shopbag"></i>
                    <span className="count-style">0</span>
                </a>
            </div>
        </Fragment>
    );
}

export default CartSection;