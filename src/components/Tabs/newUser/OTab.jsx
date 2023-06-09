import React, { useState } from 'react';
import CopyButton from '../../copy/CopyButton'
import styled from '@emotion/styled';

const OjiContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 90%;
  background-color: ${props => props.theme.palette.sidebar.main};
  padding-bottom: 5rem;
  }
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
  height: 45rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;


const ContentOjiContainer = styled.div`
  width: 100%;
  height: 100%;
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
  padding: .4rem;

  p {
    color: ${props => props.theme.palette.txt.main};
    font-size: 1.5rem;
  }
`;

const DescOffice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: .5rem;
  border-top: 1px solid ${props => props.theme.palette.border.main};
  border-bottom: 1px solid ${props => props.theme.palette.border.main};

  p {
    color: ${props => props.theme.palette.txt.main};
    font-size: 1.5rem;
  }
`;

const DescCompany = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: .5rem;
  border-bottom: 1px solid ${props => props.theme.palette.border.main};

  p {
    color: ${props => props.theme.palette.txt.main};
    font-size: 1.5rem;
  }
`;

const OjiFormContainer = styled.form`
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

const OjiLog = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;

  p {
    color: ${props => props.theme.palette.txt.main};
    font-size: 1.5rem
  }

  button {
    width: 17%;
    margin-top: 2rem;
    margin-left: 2rem;
  }
`;

const OjiNotificar = styled.div `

  p {
    color: ${props => props.theme.palette.txt.main};
    font-size: 1.5rem;
    margin-left: 1rem;
  }

  button {
    width: 17%;
    margin-top: 1rem;
    margin-left: 2rem;
  }
`;

const Oji = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const ojiLog = `Realizada criação de usuário com sucesso. Segue abaixo credenciais de acesso.
    
Usuário: ${user}
E-mail: ${email}
Senha: Papeis@2023`;

  const tabsData = [
    { 
      label: 'Script de Criação', 
      content: 
      <ContentOjiContainer>
        <h3>Description:</h3>
        <Desc>
          <p>Efetivos: Efetivo / DRT - Piracicaba</p>
          <div className="btn-wrapper">          
          <CopyButton text='Efetivo / DRT - Piracicaba'  />
          </div>
        </Desc>
        <Desc>
          <p>Estagiarios: Estagiário(a) / DRT - Piracicaba</p>
          <div className="btn-wrapper">          
          <CopyButton text='Estagiário(a) / DRT - Piracicaba'  />
          </div>
        </Desc>
        <Desc>
          <p>Menor aprendiz: Menor Aprendiz / Piracicaba</p>
          <div className="btn-wrapper">          
          <CopyButton text='Menor Aprendiz / Piracicaba'  />
          </div>
        </Desc>
        <Desc>
          <p>Terceiros: Terceiro / Nome da Empresa</p>
          <div className="btn-wrapper">          
          <CopyButton text='Terceiro / Nome da Empresa'  />
          </div>
        </Desc>

        <DescOffice>
          <p>Office: Piracicaba</p>
          <div className="btn-wrapper">          
          <CopyButton text='Piracicaba'  />
          </div>
        </DescOffice>

        <DescCompany>
          <p>Company: Oji Papéis Especiais. </p>
          <div className="btn-wrapper">          
          <CopyButton text='Oji Papéis Especiais.'  />
          </div>
        </DescCompany>

        <Desc>
          <p>Efetivos: PC - TODOS; FSSO_RESTRITO; PC - Efetivos;</p>
          <div className="btn-wrapper">          
          <CopyButton text='PC - TODOS; FSSO_RESTRITO; PC - Efetivos;'  />
          </div>
        </Desc>

        <Desc>
          <p>Estagiarios: PC - TODOS; FSSO_RESTRITO; PC - Estagiarios;</p>
          <div className="btn-wrapper">          
          <CopyButton text='PC - TODOS; FSSO_RESTRITO; PC - Estagiarios;'  />
          </div>
        </Desc>

        <Desc>
          <p>Menor Aprendiz: PC - TODOS; FSSO_RESTRITO; PC - Aprendiz;</p>
          <div className="btn-wrapper">          
          <CopyButton text='PC - TODOS; FSSO_RESTRITO; PC - Aprendiz;'  />
          </div>
        </Desc>

        <Desc>
          <p>Terceiros: PC - TODOS; FSSO_RESTRITO; PC - Terceiros;</p>
          <div className="btn-wrapper">          
          <CopyButton text='PC - TODOS; FSSO_RESTRITO; PC - Terceiros;'  />
          </div>
        </Desc>

      </ContentOjiContainer>
    },
    { 
      label: 'Log de resolução',
      content: 
      <ContentOjiContainer>
        <OjiFormContainer>
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
        </OjiFormContainer>
        <OjiLog>
            <p>
                Realizada criação de usuário com sucesso. Segue abaixo credenciais de acesso.
            </p>
            <p>Usuário: {user}</p>
            <p>Email: {email}</p>
            <p>Senha: **********</p>

            <div className="btn-wrapper">
            <CopyButton text={ojiLog} />
            </div>

        </OjiLog>
        <OjiNotificar>
            <p>Log notificar Reponsaveis: Responsaveis notificados via email.</p>
            <div className="btn-wrapper">
            <CopyButton text="Responsaveis notificados via email." className='copy-btn' />
            </div>
        </OjiNotificar>
        
      </ContentOjiContainer>
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
    <OjiContainer>
    <TabContainer>
      {tabsData.map(renderTab)}
    </TabContainer>
    <TabContent>
      {selectedTabContent}
    </TabContent>
  </OjiContainer>
  );
};

export default Oji;
