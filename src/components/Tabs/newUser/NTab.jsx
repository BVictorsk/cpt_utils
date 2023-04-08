import React, { useState } from 'react';
import CopyButton from '../../copy/CopyButton'
import styled from '@emotion/styled';

const NitroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 90%;
  background-color: ${props => props.theme.palette.sidebar.main};
}`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const TabButton = styled.button`
  padding: 10px;
  background-color: ${({ selected }) => selected ? '#fa0f26' : '#ad0a1a'};
  color: white;
  border: none;
  cursor: pointer;
  flex: 1;
`;

const TabContent = styled.div`
  padding: 1rem;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const ContentNitroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${props => props.theme.palette.sidebar.main};;

  h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: .5rem;
  }
`;

const Desc = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: .5rem;

  p {
    color: white;
    font-size: 1.5rem;
  }
`;

const NitroFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;  

  label {
    margin-top: 1rem;
    margin-bottom: .3rem;
    color: ${props => props.theme.palette.txtLabel.main};
    font-size: 1.4rem;
  }

  input {
    background-color: ${props => props.theme.palette.navbar.main};
    color: ${props => props.theme.palette.txtInput.main};
    height: 2.2rem;
    padding: 1rem;
  }
`;

const NitroLog = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;

  p {
    color: white;
    font-size: 1.5rem
  }

  button {
    width: 17%;
    margin-top: 2rem;
    margin-left: 2rem;
  }
`;

const NitroNotificar = styled.div `

  p {
    color: white;
    font-size: 1.5rem;
    margin-left: 1rem;
  }

  button {
    width: 17%;
    margin-top: 1rem;
    margin-left: 2rem;
  }
`;

const Nitro = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const nitroLog = `Realizada criação de usuário com sucesso.Segue abaixo credenciais de acesso.
    
Usuário: ${user}
E-mail: ${email}
Senha: nitro@2023`;

  const tabsData = [
    { 
      label: 'Script de Criação', 
      content: 
      <ContentNitroContainer>
        <Desc>
          <p>Description: | Nitro</p>
          <CopyButton text=' | Nitro'  />
        </Desc>
        <Desc>
          <p>Office: Nitro Química SP</p>
          <CopyButton text='Nitro Química SP'  />
        </Desc>
        <Desc>
          <p>Company: Nitro Química</p>
          <CopyButton text='Nitro Química'  />
        </Desc>
        <Desc>
          <p>Script</p>
          <CopyButton text='\\nitroquimica.local\sysvol\nitroquimica.local\scripts'  />
        </Desc>
        <Desc>
          <p>Pasta</p>
          <CopyButton text='L:\Users'  />
        </Desc>
      </ContentNitroContainer>
    },
    { 
      label: 'Log de resolução',
      content: 
      <ContentNitroContainer>
        <NitroFormContainer>
          <label htmlFor="user-input">Usuário</label>
          <input 
            type="text" 
            id="user-input"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
          <label htmlFor="email-input">Email</label>
          <input 
            type="text" 
            id="email-input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </NitroFormContainer>
        <NitroLog>
            <p>
                Realizada criação de usuário com sucesso. Segue abaixo credenciais de acesso.
            </p>
            <p>Usuário: {user}</p>
            <p>Email: {email}</p>
            <p>Senha: **********</p>

            <CopyButton text={nitroLog} />

        </NitroLog>
        <NitroNotificar>
            <p>Log notificar Reponsaveis: Responsaveis notificados via email.</p>
            <CopyButton text="Responsaveis notificados via email." className='copy-btn' />
        </NitroNotificar>
        
      </ContentNitroContainer>
   },
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const renderTab = (tab, index) => {
    const isSelected = selectedTab === index;

    return (
      <TabButton key={tab.label} onClick={() => setSelectedTab(index)} selected={isSelected}>
        {tab.label}
      </TabButton>
    );
  };

  const selectedTabContent = tabsData.find((tab, index) => index === selectedTab)?.content;

  return (
    <NitroContainer>
    <TabContainer>
      {tabsData.map(renderTab)}
    </TabContainer>
    <TabContent>
      {selectedTabContent}
    </TabContent>
  </NitroContainer>
  );
};

export default Nitro;
