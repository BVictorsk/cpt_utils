import React from 'react'
import styled from '@emotion/styled';
import Dropdown from '../dropdown/Dropdown'
import { NavLink } from 'react-router-dom';

const SidebarContainer  = styled.div`
  flex: 1;
  background-color: ${props => props.theme.palette.sidebar.main};
  border-right: .1rem solid ${props => props.theme.palette.border.main};;
  display: flex;
  transition: all 0.4s ease-in-out;
  
  ul {
    text-decoration: none;
    list-style-type: none;

    flex:1;
  }
  
`;

const StyledLi = styled.li`
  border-bottom: 1px solid ${props => props.theme.palette.border.main};;
  padding: 1.3rem;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.6rem;
  color: ${props => props.theme.palette.txt.main};;

  text-decoration: none;
  list-style-type: none;

  transition: all 0.3s ease-in-out;
  font-weight: bold;
  &.active {
    font-weight: bold;
    color: ${props => props.theme.palette.border.main};
    
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