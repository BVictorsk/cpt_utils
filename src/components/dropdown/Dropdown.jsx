import React, { useState } from 'react';
import Tab from '../tab/Tab';
import './Dropdown.css'

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='dropdown'>
      <Tab onClick={toggleDropdown} label={props.label} />
      {isOpen && (
        <section>
          <div>{props.content}</div>
        </section>
      )}
    </div>
  );
}

export default Dropdown;    
