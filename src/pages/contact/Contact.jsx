import React from 'react'

import styled from '@emotion/styled';
import CTab from '../../components/Tabs/Contact/CTab'

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 4;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <CTab/>
    </ContactContainer>
  )
}

export default Contact