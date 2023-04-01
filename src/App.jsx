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
import { motion } from 'framer-motion';
import './App.css'

function App() {

  return (
    <div className="App">
      <motion.div
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="dropdown-center"
      >
        <Dropdown label="Contato" content={
          <div>
            <motion.div
              whileInView={{ x: [-40, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="dropdown-center"
            >     
              <SubDrop label="Tentativa de contato" content ={
                <CTab1 />
              }  />
            </motion.div> 
            <motion.div
              whileInView={{ x: [-40, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="dropdown-center"
            > 
              <SubDrop label="Sem Contato" content ={
                <CTab2 />
              }/>
            </motion.div>
            <motion.div
              whileInView={{ x: [-40, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="dropdown-center"
            > 
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
              </motion.div>
  
          </div>
        } />
      </motion.div>

      <motion.div
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="dropdown-center"
      >
        <Dropdown label="Criação" content={
          <>
            <motion.div
              whileInView={{ x: [-40, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="dropdown-center"
            > 
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
            </motion.div>

            <motion.div
              whileInView={{ x: [-40, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="dropdown-center"
            > 
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
            </motion.div>
          </>
        } />
      </motion.div>
    </div>
  )
}

export default App
