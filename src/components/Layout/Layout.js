import React from 'react';
import PropTypes from 'prop-types';
import HeaderBar from '../HeaderBar';
import Footer from '../Footer';


import {
    BrowserRouter as Router,
    Route,
    Switch
    } from 'react-router-dom';



// import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
           {/* <HeaderBar/> */}
           <Route exact path='/' component={HeaderBar}/>
           <Route exact path ='/profile/:id' component={HeaderBar}/>
        </div>
        <div className="appContent">
            {children}
        </div>
        <Route exact path='/' component={Footer}/>
        <Route exact path ='/profile/:id' component={Footer}/>
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
