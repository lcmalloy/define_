import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #4C6071;
  height: 52px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 10000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #2EBD;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 80%;
  curser: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #B7C7C9;
    color: #000000;
  }
  &.active {
    color: #FFFFFF
  }
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
}
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768 px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 15px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* second nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`