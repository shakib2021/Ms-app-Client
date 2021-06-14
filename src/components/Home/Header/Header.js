import React from 'react';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderInfo></HeaderInfo>
        </div>
    );
};

export default Header;