import React from 'react'

import styled from '@emotion/styled';
import NTab from '../../components/Tabs/newUser/NTab'

const NitroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 4;
`;

const Nitro = () => {
  return (
    <NitroContainer>
      <NTab/>
    </NitroContainer>
  )
}

export default Nitro