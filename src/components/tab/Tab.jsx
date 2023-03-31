import React from 'react';
import './Tab.css'

function Tab(props) {
  return (
    <div onClick={props.onClick} className="tab">
      {props.label}
    </div>
  );
}

export default Tab;
