import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navElements.jsx';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
        <NavLink to='/home' activeStyle>
          Home
        </NavLink>
        <NavLink to='/about' activeStyle>
          About
        </NavLink>
        <NavLink to='/pcBuild' activeStyle>
          PC Builds
        </NavLink>
        <NavLink to='/kbBuild' activeStyle>
          Keyboard Builds
        </NavLink>
        <NavLink to='/commission' activeStyle>
          Commission
        </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to ='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;