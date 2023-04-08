import React from 'react'
import styled from '@emotion/styled';
import Dropdown from '../dropdown/Dropdown'
import { NavLink } from 'react-router-dom';

const SidebarContainer  = styled.div`
  flex: 1;
  background-color: ${props => props.theme.palette.sidebar.main};
  border-right: .1rem solid #fa0f26;
  display: flex;
  
  ul {
    text-decoration: none;
    list-style-type: none;

    flex:1;
  }
  
`;

const StyledLi = styled.li`
  border-bottom: 1px solid ${props => props.theme.palette.red.main};
  padding: 1.3rem;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.6rem;
  color: #fff;

  text-decoration: none;
  list-style-type: none;

  &.active {
    font-weight: bold;
    color: ${props => props.theme.palette.red.main}
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer >
      <ul>
        <StyledLi>
          <StyledNavLink to='/'>
            Contato
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
          <Dropdown label="Criação" content={
            <ul>
              <li>
                <StyledNavLink to='/newUser/Nitro'>
                  Nitro
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to='/newUser/Oji'>
                  Oji
                </StyledNavLink>
              </li>
            </ul>
          } />
        </StyledLi>
        <StyledLi>
          <StyledNavLink to='/gruposDeAcesso'>
            Acessos
          </StyledNavLink>
        </StyledLi>
      </ul>
      
    </SidebarContainer >
  )
}

export default Sidebar