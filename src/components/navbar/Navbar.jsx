import React from 'react';
import styled from '@emotion/styled';

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7rem;
  overflow: hidden;
  border-bottom: .3rem solid ${props => props.theme.palette.border.main};
  transition: all 0.2s ease-in-out;
  background-color: ${props => props.theme.palette.navbar.main};

  .logo {
    margin-left: 3rem;

    h1 {
      color: ${props => props.theme.palette.themeSwitcher.main};

      span {
        color: ${props => props.theme.palette.txt.main};
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
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

  color: ${props => props.theme.palette.txt.white};

  background-color: ${props => props.theme.palette.themeSwitcher.main};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.palette.themeSwitcher.dark};
  }
`;


const Navbar = ({ toggleDarkMode, theme}) => {

  return (
      <NavbarContainer >
        <div className="logo">
          <h1>UTILS<span>cpt</span></h1>
        </div>
        <ThemeSwitcherContainer>
          <ThemeSwitcher onClick={toggleDarkMode} style={{ backgroundColor: theme.palette.themeSwitcher.main }} >
            Mudar Tema
          </ThemeSwitcher>
        </ThemeSwitcherContainer>
      </NavbarContainer>
  );
};


export default Navbar;
