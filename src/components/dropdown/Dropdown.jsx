import React, { useState } from 'react';
import DropDownTab from './tab/DropDownTab';
import styled from '@emotion/styled';

const DropdownContainer  = styled.div`
  font-size: 1.6rem;
  color: ${props => props.theme.palette.txt.main};;
  font-weight: bold;

  ul {
    margin-top: .5rem;
    margin-left: 1rem;
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
