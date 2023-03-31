import './App.css'
import CTab1 from './components/contact-tab/CTab1'
import CTab2 from './components/contact-tab/CTab2'
import Teams from './components/contact-tab/Teams'
import CopyButton from './components/copy/CopyButton'
import NitroLog from './components/criar/nitro/NitroLog'
import NitroScript from './components/criar/nitro/NitroScript'
import OjiLog from './components/criar/oji/OjiLog'
import OjiScript from './components/criar/oji/OjiScript'
import Dropdown from './components/dropdown/Dropdown'
import SubDrop from './components/dropdown/SubDrop'

function App() {


  return (
    <div className="App">
      <Dropdown label="Contato" content={
        <div>        
          <SubDrop label="Tentativa de contato" content ={
            <CTab1 />
          }  />
          <SubDrop label="Sem Contato" content ={
            <CTab2 />
          }/>
          <SubDrop label="Teams" content ={
            <>
              <SubDrop label="Mensagem" content={
                <Teams />
              } />
              <SubDrop label="log" content={
                <div className="log-btn">
                  <h1>Realizado contato via teams, aguardando resposta do solicitante</h1>
                  <CopyButton text='Realizado contato via teams, aguardando resposta do solicitante'  />
                </div>
              }/>
            </>

            } />
        </div>
      } className="dropdown-center" />
      <Dropdown label="Criação" content={
        <>
          <SubDrop label="Nitro" content={
            <>
            <SubDrop label="Nitro Script" content={
              <NitroScript />
            } />
            <SubDrop label="Resolução" content={
              <NitroLog />
            } />
            </>
          }/>

          <SubDrop label="Oji" content={
            <>
            <SubDrop label="Oji Script" content={
              <OjiScript />
            } />
            <SubDrop label="Resolução" content={
              <OjiLog />
            } />
            </>
          }/>
        </>
      } />
      
    </div>
  )
}

export default App
