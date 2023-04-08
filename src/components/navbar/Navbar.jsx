import React, { useState } from 'react';
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

const InputContainer = styled.div`
  label {
    color: ${props => props.theme.palette.txt.main};
    font-size: 1.3rem
  }
`;

const ThemeSwitcher = styled.button`
  height: 3rem;
  width: 9.5rem;

  border-radius: 1rem;

  color: ${props => props.theme.palette.textBtn.main}
`;

export const getSelectedAnalista = (analista) => {
  return analista;
}

const Navbar = ({ toggleDarkMode, theme }) => {
  const [analista, setAnalista] = useState("");

 

  return (
      <NavbarContainer >
        <LogoContainer>
          <img src={logo} alt="Logo" className="logo" />
        </LogoContainer>
        <ThemeSwitcherContainer>
          <InputContainer>
            <label htmlFor="analista-select">Analista:</label>
            <select id="analista-select" value={analista} onChange={(event) => setAnalista(event.target.value)}>
              <option value="">Selecione analista</option>
              <option value="Brian">Brian</option>
              <option value="Jefferson">Jefferson</option>
              <option value="Lucas">Lucas</option>
              <option value="Luis">Luis</option>
              <option value="Paulo">Paulo</option>
              <option value="Renan">Renan</option>
            </select>
          </InputContainer>
        
          <ThemeSwitcher onClick={toggleDarkMode} style={{ backgroundColor: theme.palette.themeSwitcher.main }} >
            Mudar Tema
          </ThemeSwitcher>
        </ThemeSwitcherContainer>
      </NavbarContainer>
  );
};


export default Navbar;
