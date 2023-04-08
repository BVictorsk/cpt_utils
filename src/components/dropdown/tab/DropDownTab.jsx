import React from 'react';
import styled from '@emotion/styled';

const TabContainer = styled.div`
  transition: all .2s ease-in-out;
`

function DropDownTab(props) {
  return (
    <TabContainer onClick={props.onClick}>
      {props.label}
    </TabContainer>
  );
}

export default DropDownTab;
