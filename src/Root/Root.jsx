import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Aside from '../Aside/Aside';
import  "../Root/root.css"

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="asideContainer">
                <Aside></Aside>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;