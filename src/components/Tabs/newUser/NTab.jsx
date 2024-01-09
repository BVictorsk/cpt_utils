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
  background-color: ${({ selected, theme }) => selected ? theme.palette.tab.strong : theme.palette.tab.light};
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
    color: ${props => props.theme.palette.txt.main};
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
    color: ${props => props.theme.palette.txt.main};
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
    color: ${props => props.theme.palette.txt.main};
    font-size: 1.4rem;
  }

  input {
    background-color: ${props => props.theme.palette.navbar.main};
    color: ${props => props.theme.palette.txt.main};
    height: 2.2rem;
    padding: 1rem;
  }
`;

const NitroLog = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.palette.txt.main};

  p {
    font-size: 1.6rem;
    color: ${props => props.theme.palette.txt.main};
  }
  .mb {
    margin-bottom: 1rem;
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
    color: ${props => props.theme.palette.txt.main};
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
  const nitroLog = `Realizada criação de usuário com sucesso. Segue abaixo credenciais de acesso.
    
Usuário: ${user}
E-mail: ${email}
Senha: Nitro@2024`;

  const tabsData = [
    { 
      label: 'Script de Criação', 
      content: 
      <ContentNitroContainer>
        <Desc>
          <p>Display: | Nitro</p>
          <div className="btn-wrapper">          
            <CopyButton text=' | Nitro'  />
          </div>
        </Desc>
        <Desc>
          <p>Office: Nitro Química SP</p>
          <div className="btn-wrapper">          
            <CopyButton text='Nitro Química SP'  />
          </div>
        </Desc>
        <Desc>
          <p>Company: Nitro Química</p>
          <div className="btn-wrapper">          
            <CopyButton text='Nitro Química'  />
          </div>
        </Desc>
        <Desc>
          <p>Script</p>
          <div className="btn-wrapper">          
            <CopyButton text='\\nitroquimica.local\sysvol\nitroquimica.local\scripts'  />
          </div>
        </Desc>
        <Desc>
          <p>Pasta</p>
          <div className="btn-wrapper">          
            <CopyButton text='L:\Users'  />
          </div>
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
            <p className='mb'>Senha: **********</p>

            <CopyButton text={nitroLog} />

        </NitroLog>
        <NitroNotificar>
            <p className='mb'>Log notificar Reponsaveis: Responsaveis notificados via email.</p>
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
