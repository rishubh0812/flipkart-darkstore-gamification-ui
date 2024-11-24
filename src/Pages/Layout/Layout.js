import React from "react";
import SidePanel from "../../Components/SidePanel/SidePanel";
import { Outlet } from "react-router-dom";
import TopPanel from "../../Components/TopPanel/TopPanel";
import { useSelector } from "react-redux";

const Layout = () => {
    const userName = useSelector(state => state.user.name);
    const userRole = useSelector(state => state.user.role);
    return <div className="layout" style={{
        display: "flex",
    }}>
        <SidePanel userRole={userRole}/>
        <div className="content" style={{
            width: "100%",
            height: "100%"
        }}>
        <TopPanel name={userName} role={userRole}/>
         <Outlet />
        </div>
    </div>;
}

export default Layout;