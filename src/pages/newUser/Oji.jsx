import React from 'react'

import styled from '@emotion/styled';
import OTab from '../../components/Tabs/newUser/OTab'

const OjiContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 4;
`;

const Oji = () => {
  return (
    <OjiContainer>
      <OTab />
    </OjiContainer>
  )
}

export default Oji