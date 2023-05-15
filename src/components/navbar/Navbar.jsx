import React from 'react';
import styled from '@emotion/styled';
import logo from '../../assets/CptLogo.png';
import './Navbar.scss'

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7rem;
  overflow: hidden;
  border-bottom: .3rem solid #fa0f26;
  transition: all 0.2s ease-in-out;
  background-color: ${props => props.theme.palette.navbar.main};
`;

const LogoContainer = styled.div`
    margin-left: 3rem
`;

const ThemeSwitcherContainer = styled.div`
  margin-right: 2rem;
  width: 40rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ThemeSwitcher = styled.button`
  height: 3rem;
  width: 9.5rem;

  border-radius: 1rem;

  color: ${props => props.theme.palette.textBtn.main};

  background-color: ${props => props.theme.palette.themeSwitcher.main};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.palette.themeSwitcher.dark};
  }
`;


const Navbar = ({ toggleDarkMode, theme}) => {

  return (
      <NavbarContainer >
        <LogoContainer>
          <img src={logo} alt="Logo" className="logo" />
        </LogoContainer>
        <ThemeSwitcherContainer>
          <ThemeSwitcher onClick={toggleDarkMode} style={{ backgroundColor: theme.palette.themeSwitcher.main }} >
            Mudar Tema
          </ThemeSwitcher>
        </ThemeSwitcherContainer>
      </NavbarContainer>
  );
};


export default Navbar;
