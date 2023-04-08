import React from 'react'
import styled from '@emotion/styled';
import Dropdown from '../dropdown/Dropdown'
import { NavLink } from 'react-router-dom';

const SidebarContainer  = styled.div`
  flex: 1;
  background-color: ${props => props.theme.palette.sidebar.main};
  border-right: .1rem solid #fa0f26;
  text-decoration: none;
  list-style-type: none;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1rem;
  color: #fff;

  text-decoration: none;
  list-style-type: none;

  &.active {
    /* styles for the active link */
    font-weight: bold;
    color: ${props => props.theme.palette.red.main}
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer >
      <ul>
        <li>
          <StyledNavLink to='/'>
            <Dropdown label="Contato" />
          </StyledNavLink>
        </li>
        <li>
          <Dropdown label="Criação" content={
            <ul>
              <li>
                <StyledNavLink to='/newUser/Nitro'>
                  <p>Nitro</p>
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to='/newUser/Oji'>
                  <p>Oji</p>
                </StyledNavLink>
              </li>
            </ul>
          } />
        </li>
        <li>
          <StyledNavLink >
            <Dropdown label="Acessos" />
          </StyledNavLink>
        </li>
      </ul>
      
    </SidebarContainer >
  )
}

export default Sidebar