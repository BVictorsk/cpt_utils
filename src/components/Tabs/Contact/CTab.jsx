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
  background-color: ${({ selected }) => selected ? '#fa0f26' : '#ad0a1a'};
  color: white;
  border: none;
  cursor: pointer;
  flex: 1;
`;

const TabContent = styled.div`
  padding: 1rem;
  height: 45rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const ContentContact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${props => props.theme.palette.sidebar.main};

  label {
    color: ${props => props.theme.palette.txtLabel.main};
    margin-bottom: .5rem;
    font-size: 1.4rem;
    font-weight: bold;
  }

  input {
    background-color: ${props => props.theme.palette.navbar.main};
    color: ${props => props.theme.palette.txt.main};
    margin-bottom: 1.4rem;
    padding: 0.5rem;
    width: 30.5rem;

  }

  select {
    background-color: ${props => props.theme.palette.navbar.main};
    color: ${props => props.theme.palette.txt.main};
    margin-bottom: 2rem;
    padding: 0.5rem;
    width: 30.5rem;
  }

  p {
    color: white;
    font-size: 1.5rem;
    margin-bottom: .5rem;
  }

  button {
    margin-top: 2rem;
    width: 33%;
  }
`;

const CTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [solicitante, setSolicitante] = useState("");
  const [numero, setNumero] = useState("");
  const [contato, setContato] = useState("");
  const [greetings, setGreetings] = useState("");
  const [chamado, setChamado] = useState("");
  const [analista, setAnalista] = useState("");

  //inicia o estado do componente com o valor armazenado no localStorage
  useEffect(() => {
    const analistaLocalStorage = localStorage.getItem('analista');
    if (analistaLocalStorage) {
      setAnalista(analistaLocalStorage);
    }
  }, []);

  // armazenar o valor selecionado no localStorage
  const handleAnalistaChange = (event) => {
    const value = event.target.value;
    setAnalista(value);
    localStorage.setItem('analista', value);
  }
  
  

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
  const tc =  `${greetings} ${solicitante}!
  
Realizada tentativa de contato no numero ${numero}.
  
Favor retornar contato com Helpdesk assim que possivel: ${contato}.
  
Atenciosamente, Helpdesk`;

//sem contato 
const tcs = `${greetings} ${solicitante}!
  
Não identificamos numero de telefone para contato.
  
Favor retornar contato com Helpdesk assim que possivel: ${contato}.
  
Atenciosamente, Helpdesk`;

//contato teams
const ct = `${greetings} ${solicitante}! Sou o ${analista} do Helpdesk.
Motivo do contato referente ao chamado: ${chamado}.
Possui disponibilidade para realizar atendimento do chamado agora?`


  const tabsData = [
    { 
      label: 'Tentativa de contato', 
      content: 
      <ContentContact>
        <label htmlFor="solicitante-input">Solicitante:</label>
        <input
          type="text"
          id="solicitante-input"
          value={solicitante}
          onChange={(event) => setSolicitante(event.target.value)}
        />
        <label htmlFor="numero-input">Numero:</label>
        <input
          type="text"
          id="numero-input"
          value={numero}
          onChange={(event) => setNumero(event.target.value)}
        />
        <label htmlFor="contato-select">Contato:</label>
        <select id="contato-select" value={contato} onChange={(event) => setContato(event.target.value)}>
          <option value="">Selecione Contato do Helpdesk</option>
          <option value="(11) 2134-9011 /(11) 2147-6459">Nitro</option>
          <option value="(11) 2134-9024 / (11) 2147-6462">Oji</option>
        </select>
          <p>{greetings} {solicitante}!</p>
          <p>Realizada tentativa de contato no numero {numero}.</p>
          <p>Favor retornar contato com Helpdesk assim que possivel: {contato}.</p>
          <p>Atenciosamente, Helpdesk.</p>
          <CopyButton text={tc}/>
      </ContentContact>
    },
    { 
      label: 'Sem contato',
      content: 
      <ContentContact>
        <label htmlFor="solicitante-input">Solicitante:</label>
        <input
          type="text"
          id="solicitante-input"
          value={solicitante}
          onChange={(event) => setSolicitante(event.target.value)}
        />
        <label htmlFor="contato-select">Contato:</label>
        <select id="contato-select" value={contato} onChange={(event) => setContato(event.target.value)}>
          <option value="">Selecione Contato do Helpdesk</option>
          <option value="(11) 2134-9011 /(11) 2147-6459">Nitro</option>
          <option value="(11) 2134-9024 / (11) 2147-6462">Oji</option>
        </select>
          <p>{greetings} {solicitante}!</p>
          <br />
          <p>Não identificamos numero de telefone para contato.</p>
          <br />
          <p>Favor retornar contato com Helpdesk assim que possivel: {contato}.</p>
          <br />
          <p>Atenciosamente, Helpdesk.</p>
          <CopyButton text={tcs}/>
      </ContentContact>
   },

    { 
      label: 'Contato Teams',
      content: 
      <ContentContact>
        <label htmlFor="solicitante-input">Solicitante:</label>
        <input
          type="text"
          id="solicitante-input"
          value={solicitante}
          onChange={(event) => setSolicitante(event.target.value)}
        />
        <label htmlFor="chamado-input">Chamado Nº:</label>
        <input
          type="text"
          id="chamado-input"
          value={chamado}
          onChange={(event) => setChamado(event.target.value)}
        />
        <label htmlFor="analista-select">Analista:</label>
        <select
          id="analista-select"
          value={analista}
          onChange={handleAnalistaChange}
        >
          <option value="">Selecione analista</option>
          <option value="Brian">Brian</option>
          <option value="Jefferson">Jefferson</option>
          <option value="Lucas">Lucas</option>
          <option value="Luis">Luis</option>
          <option value="Paulo">Paulo</option>
          <option value="Renan">Renan</option>
        </select>
        <p>{greetings} {solicitante}! Sou o {analista} do Helpdesk.</p>
        <p>Motivo do contato referente ao chamado: {chamado}.</p>
        <p>Possui disponibilidade para realizar atendimento do chamado agora?</p>
        <CopyButton text={ct}/>
        <br />
        <p>Log: Realizado contato via teams, aguardando resposta do solicitante</p>
        <CopyButton text='Realizado contato via teams, aguardando resposta do solicitante'/>
      </ContentContact>
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

export default CTab;
