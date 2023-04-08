import React from 'react'

import styled from '@emotion/styled';
import CTab1 from '../../components/Tabs/Contact/CTab1'

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 4;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <CTab1/>
    </ContactContainer>
  )
}

export default Contact