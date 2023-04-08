import React from 'react'

import styled from '@emotion/styled';
import AGTab from '../../components/Tabs/Access/AGTab';


const AccessContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 4;
`;

const AccessGroups = () => {
  return (
    <AccessContainer>
      <AGTab />
    </AccessContainer>
  )
}

export default AccessGroups