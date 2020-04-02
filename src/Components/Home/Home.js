import React, { Fragment } from 'react';

import './Home.css';
import Header from './../SharedComponents/Header/Header';
import CategoriesView from './CategoriesView/CategoriesView';
import Subscription from './Subscription/Subscription';
import MainFooter from './MainFooter/MainFooter';

const Home = (props) => {
    return (
        <Fragment>
            <Header />
            <CategoriesView />
            <Subscription />
            <MainFooter />
        </Fragment>
    );
}

export default Home;