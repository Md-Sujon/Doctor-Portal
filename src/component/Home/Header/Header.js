import React from 'react';
import BussinessInfo from '../BussinessInfo/BussinessInfo';
import HomeMain from '../HomeMain/HomeMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HomeMain></HomeMain>
            <BussinessInfo></BussinessInfo>
        </div>
    );
};

export default Header;