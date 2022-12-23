import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Dashboard/Menu/Menu';

const Dashboard = () => {
    return (
        <div>
            <Menu></Menu>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;