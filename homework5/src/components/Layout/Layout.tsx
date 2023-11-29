import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";

const Layout: React.FC = () => {
    return (
        <>
            <Sidebar />
            <section className="content">
                <Outlet />
            </section>
        </>
    );
};

export default Layout;
