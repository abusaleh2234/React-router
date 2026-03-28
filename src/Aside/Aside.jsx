import React from 'react';
import { NavLink } from 'react-router';

const Aside = () => {
    return (
        <div>
            <li>
                <NavLink to="home">
                    {({ isActive, isPending, isTransitioning }) => (
                        <span className={isActive ? "active" : ""}>Home</span>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink to="about">
                    {({ isActive, isPending, isTransitioning }) => (
                        <span className={isActive ? "active" : ""}>About</span>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink to="/tasks">
                    {({ isActive, isPending, isTransitioning }) => (
                        <span className={isActive ? "active" : ""}>Contact</span>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink to="/tasks">
                    {({ isActive, isPending, isTransitioning }) => (
                        <span className={isActive ? "active" : ""}>Blogs</span>
                    )}
                </NavLink>
            </li>
        </div>
    );
};

export default Aside;