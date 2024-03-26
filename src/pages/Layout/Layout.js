import React from 'react';
import Navigation from "../../features/Navigation/Navigation";
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navigation />

            <main>
                <Outlet />
            </main>
            
        </>
    );
};

export default Layout;