import React, { Fragment } from 'react';

import Header from './../SharedComponents/Header/Header';
import Breadcrumb from './../SharedComponents/Breadcrumb/Breadcrumb';
import ShoppingArea from './ShoppingArea/ShoppingArea';
import Footer from './../SharedComponents/Footer/Footer';

const Product = () => {
    return (
        <Fragment>
            <Header />
            <Breadcrumb />
            <ShoppingArea />
            <Footer />
        </Fragment>
    );
}

export default Product;