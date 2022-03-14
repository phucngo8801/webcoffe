import React from 'react'
import { Nav, NavIcon, NavLink ,Bars } from './NavbarElement'

const Navbar = ({toggle}) => {
    return (
        <>
         <Nav>
             <NavLink to='/'>C O F F E E</NavLink>
             <NavIcon onClick={toggle}>
                 <p>Menu</p>
                 <Bars />
             </NavIcon>
             </Nav>   
        </>
    );
};

export default Navbar;
