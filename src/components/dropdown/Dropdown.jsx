import React, { useState } from 'react';
import DropDownTab from './tab/DropDownTab';
import styled from '@emotion/styled';

const DropdownContainer  = styled.div`
  border-bottom: 1px solid ${props => props.theme.palette.red.main};
  padding: 2rem;
  font-size: 1.5rem;
  color: #fff;

  ul {
    text-decoration: none;
    list-style-type: none;
  }
`;

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <DropdownContainer>
      <DropDownTab onClick={toggleDropdown} label={props.label} />

      {isOpen && (
        <section>
          <div>{props.content}</div>
        </section>
      )}
    </DropdownContainer>
  );
}

export default Dropdown;    
