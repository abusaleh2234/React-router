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
                <NavLink to="/users">
                    {({ isActive, isPending, isTransitioning }) => (
                        <span className={isActive ? "active" : ""}>Users</span>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink to="/users2">
                    {({ isActive, isPending, isTransitioning }) => (
                        <span className={isActive ? "active" : ""}>Users2</span>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink to="/posts">
                    {({ isActive, isPending, isTransitioning }) => (
                        <span className={isActive ? "active" : ""}>Posts</span>
                    )}
                </NavLink>
            </li>
        </div>
    );
};

export default Aside;