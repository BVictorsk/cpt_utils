import React, { useState, useEffect } from 'react';
import CopyButton from '../../copy/CopyButton'
import styled from '@emotion/styled';


const ContactContainer = styled.div`
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
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 2rem;

  label {
    color: white;
    margin-top: 1rem;
  }

  select {
    margin-top: -1rem;
    background-color: ${props => props.theme.palette.sidebar.main};
    color: ${props => props.theme.palette.txt.main};
    height: 2.5rem;
    width: 22rem
  }
`;

const AccessContent = styled.div`
    width: 100%;
    height: 15rem;
    color: #fff;
    margin-top: 2rem;

    h3 {
        font-size: 1.6rem;
        color: ${props => props.theme.palette.txt.main};
    }

    p {
        margin: 1rem;
        font-size: 1.3rem;
        color: ${props => props.theme.palette.txt.main};
    }

    button {
        margin-top: 1rem;
    }

`;


const AGTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [greetings, setGreetings] = useState("");
  const [contato, setContato] = useState("");

  useEffect(() => {
    // Obter hora atual
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 6 && hours < 12 ) {
      //manhã
      setGreetings('Bom dia');
    } else if (hours >= 12 && hours < 18 ) {
      //tarde
      setGreetings('Boa tarde');
    } else {
      //noite
      setGreetings('Boa noite');
    }
  }, []);

  //tentativa de contato sem sucesso 
  const vpnl =  `${greetings}!

Foi realizada alteração de acesso a VPN no no usuário solicitado.

Acesso a VPN liberado com sucesso.`;

  const vpnr =  `${greetings}!

Foi realizada alteração de acesso a VPN no no usuário solicitado.

Acesso a VPN revogado com sucesso.`;

  const pastaL =  `${greetings}!

Foi realizada alteração de acesso a pasta de rede. Acesso a pasta foi liberado.

Favor reiniciar maquina para aplicar alteração na conta.

Em caso de erro ou duvida, favor entrar em contato com Helpdesk: ${contato}`;


  const pastaR =  `${greetings}!

Foi realizada alteração de acesso a pasta de rede. Acesso a pasta foi revogado.


Em caso de erro ou duvida, favor entrar em contato com Helpdesk: ${contato}`;

  const grupoL =  `${greetings}!

Foi realizada alteração de acesso ao grupo de e-mail solicitado. Inclusão realizada com sucesso.
Favor encerrar Outlook e abri-lo novamente para validação de alteração.

Em caso de erro ou duvida, favor entrar em contato com Helpdesk: ${contato}`;

  const grupoR =  `${greetings}!

Foi realizada alteração de acesso ao grupo de e-mail solicitado. Removido do grupo de E-mail
Favor encerrar Outlook e abri-lo novamente para validação de alteração.

Em caso de erro ou duvida, favor entrar em contato com Helpdesk: ${contato}`;


  const tabsData = [
    { 
      label: 'VPN', 
      content: 
      <>
      <AccessContent>
        <h3>Liberação de acesso a VPN</h3>
        <p>{greetings}!</p>
        <p>Foi realizada alteração de acesso a VPN no no usuário solicitado.</p>
        <p>Acesso a VPN liberado com sucesso.</p>
        <CopyButton text={vpnl}/>
      </AccessContent>
      <AccessContent>
        <h3>Revogação de acesso a VPN</h3>
        <p>{greetings}!</p>
        <p>Foi realizada alteração de acesso a VPN no no usuário solicitado.</p>
        <p>Acesso a VPN revogado com sucesso.</p>
        <CopyButton text={vpnr}/>
      </AccessContent>
      </>
    },
    { 
      label: 'Pasta de rede',
      content: 
      <>
        <label htmlFor="contato-select">Contato:</label>
        <select id="contato-select" value={contato} onChange={(event) => setContato(event.target.value)}>
          <option value="">Selecione Contato do Helpdesk</option>
          <option value="(11) 2134-9011 /(11) 2147-6459">Nitro</option>
          <option value="(11) 2134-9024 / (11) 2147-6462">Oji</option>
        </select>
        <AccessContent>
            <h3>Liberação de acesso a pasta de rede</h3>
            <p>{greetings}!</p>
            <p>Foi realizada alteração de acesso a pasta de rede. Acesso a pasta foi liberado.</p>
            <p>Favor reiniciar maquina para aplicar alteração na conta</p>
            <p>Em caso de erro ou duvida, favor entrar em contato com Helpdesk: {contato}</p>
            <CopyButton text={pastaL}/>
        </AccessContent>
        <AccessContent>
            <h3>Revogar acesso a pasta de rede</h3>
            <p>{greetings}!</p>
            <p>Foi realizada alteração de acesso a pasta de rede. Acesso a pasta foi revogado.</p>
            <p>Em caso de erro ou duvida, favor entrar em contato com Helpdesk: {contato}</p>
            <CopyButton text={pastaR}/>
        </AccessContent>
      </>
   },

    { 
      label: 'Grupo de Email',
      content: 
        <>
            <label htmlFor="contato-select">Contato:</label>
            <select id="contato-select" value={contato} onChange={(event) => setContato(event.target.value)}>
                <option value="">Selecione Contato do Helpdesk</option>
                <option value="(11) 2134-9011 /(11) 2147-6459">Nitro</option>
                <option value="(11) 2134-9024 / (11) 2147-6462">Oji</option>
            </select>
            <AccessContent>
                <h3>Inclusão em grupo de E-mail</h3>
                <p>{greetings}!</p>
                <p>Foi realizada alteração de acesso ao grupo de e-mail solicitado. Inclusão realizada com sucesso.</p>
                <p>Favor encerrar Outlook e abri-lo novamente para validação de alteração.</p>
                <p>Em caso de erro ou duvida, favor entrar em contato com Helpdesk: {contato}</p>
                <CopyButton text={grupoL}/>
            </AccessContent>
            <AccessContent>
                <h3>Revogar acesso a pasta de rede</h3>
                <p>{greetings}!</p>
                <p>Foi realizada alteração de acesso ao grupo de e-mail solicitado. Removido do grupo de E-mail</p>
                <p>Favor encerrar Outlook e abri-lo novamente para validação de alteração.</p>
                <p>Em caso de erro ou duvida, favor entrar em contato com Helpdesk: {contato}</p>
                <CopyButton text={grupoR}/>
            </AccessContent>
        </>
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
    <ContactContainer>
    <TabContainer>
      {tabsData.map(renderTab)}
    </TabContainer>
    <TabContent>
      {selectedTabContent}
    </TabContent>
  </ContactContainer>
  );
};

export default AGTab;
