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

  //liberar pasta
  const folderL = `Realizada liberação de acesso a pasta de rede com sucesso.
  
Favor reiniciar maquina, afim de aplicar alterações de acesso a conta.`;

  //revogar pasta
  const folderR = `Realizada Revogação de acesso a pasta de rede com sucesso.
  
Favor reiniciar maquina, afim de aplicar alterações de acesso a conta.`;

  return (
    <div className="App">
      <motion.div
        whileInView={{ x: [-40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="dropdown-center"
      >
        <Dropdown label="Contato" content={
          <div>
            <motion.div
              whileInView={{ x: [-30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              className="dropdown-center"
            >     
              <SubDrop label="Tentativa de contato" content ={
                <CTab1 />
              }  />
            </motion.div> 
            <motion.div
              whileInView={{ x: [-30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              className="dropdown-center"
            > 
              <SubDrop label="Sem Contato" content ={
                <CTab2 />
              }/>
            </motion.div>
            <motion.div
              whileInView={{ x: [-30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              className="dropdown-center"
            > 
              <SubDrop label="Teams" content ={
                <>
                  <motion.div
                    whileInView={{ x: [-25, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    className="dropdown-center"
                  > 
                    <SubDrop label="Mensagem" content={
                      <Teams />
                    } />
                  </motion.div>
                  <motion.div
                    whileInView={{ x: [-25, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    className="dropdown-center"
                  > 
                    <SubDrop label="log" content={
                      <div className="log-btn">
                        <h1>Realizado contato via teams, aguardando resposta do solicitante</h1>
                        <CopyButton text='Realizado contato via teams, aguardando resposta do solicitante'  />
                      </div>
                    }/>
                    </motion.div>
                </>

                } />
              </motion.div>
  
          </div>
        } />
      </motion.div>

      <motion.div
        whileInView={{ x: [-40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="dropdown-center"
      >
        <Dropdown label="Criação" content={
          <>
            <motion.div
              whileInView={{ x: [-30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              className="dropdown-center"
            > 
              <SubDrop label="Nitro" content={
                <>
                  <motion.div
                    whileInView={{ x: [-25, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    className="dropdown-center"
                  > 
                    <SubDrop label="Nitro Script" content={
                      <NitroScript />
                    } />
                  </motion.div>
                  <motion.div
                    whileInView={{ x: [-25, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    className="dropdown-center"
                  > 
                    <SubDrop label="Resolução" content={
                      <NitroLog />
                    } />
                  </motion.div>
                </>
              }/>
            </motion.div>

            <motion.div
              whileInView={{ x: [-30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              className="dropdown-center"
            > 
              <SubDrop label="Oji" content={
                <>
                  <motion.div
                    whileInView={{ x: [-25, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    className="dropdown-center"
                  > 
                    <SubDrop label="Oji Script" content={
                      <OjiScript />
                    } />
                  </motion.div>
                  <motion.div
                    whileInView={{ x: [-25, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    className="dropdown-center"
                  > 
                    <SubDrop label="Resolução" content={
                      <OjiLog />
                    } />
                  </motion.div>
                </>
              }/>
            </motion.div>
          </>
        } />
      </motion.div>

      <motion.div
        whileInView={{ x: [-40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="dropdown-center"
      >
        <Dropdown label="Acessos" content={
          <>
            <motion.div
              whileInView={{ x: [-30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              className="dropdown-center"
            > 
              <SubDrop label="VPN" content={
                <>
                  <motion.div
                    whileInView={{ x: [-25, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    className="dropdown-center"
                  > 
                    <SubDrop label="Liberação de acesso" content={
                      <div className="log-btn">
                        <h1>Realizado alteração de acesso a VPN, acesso liberado com sucesso</h1>
                        <CopyButton text='Realizado alteração de acesso a VPN, acesso liberado com sucesso'  />
                      </div>
                    } />
                  </motion.div>
                  <motion.div
                    whileInView={{ x: [-25, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    className="dropdown-center"
                  > 
                    <SubDrop label="Revogar acesso" content={
                      <div className="log-btn">
                        <h1>Realizado alteração de acesso a VPN, acesso revogado com sucesso</h1>
                        <CopyButton text='Realizado alteração de acesso a VPN, acesso revogado com sucesso'  />
                      </div>
                    } />
                  </motion.div>
                </>
              }/>
            </motion.div>

            <motion.div
              whileInView={{ x: [-30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              className="dropdown-center"
            > 
              <SubDrop label="Pastas" content={
                <>
                  <motion.div
                    whileInView={{ x: [-25, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    className="dropdown-center"
                  > 
                    <SubDrop label="Liberação de acesso" content={
                      <div className="log-btn-folder">
                        <div>
                          <p>Realizada liberação de acesso a pasta de rede com sucesso.</p>
                          <br />
                          <p>Favor reiniciar maquina, afim de aplicar alterações de acesso a conta.</p>
                        </div>
                        <CopyButton text={folderL}  />
                      </div>
                    } />
                  </motion.div>
                  <motion.div
                    whileInView={{ x: [-25, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    className="dropdown-center"
                  > 
                    <SubDrop label="Revogar acesso" content={
                      <div className="log-btn-folder">
                        <div>
                          <p>Realizada revogação de acesso a pasta de rede com sucesso.</p>
                          <br />
                          <p>Favor reiniciar maquina, afim de aplicar alterações de acesso a conta.</p>
                        </div>
                        <CopyButton text={folderR}  />
                      </div>
                    } />
                  </motion.div>
                </>
              }/>
            </motion.div>

            <motion.div
              whileInView={{ x: [-30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              className="dropdown-center"
            > 
              <SubDrop label="Grupo de Email" content={
                <>
                  <motion.div
                    whileInView={{ x: [-25, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    className="dropdown-center"
                  > 
                    <SubDrop label="Liberação de acesso" content={
                      <div className="log-btn-folder">
                        <div>
                          <p>Realizada alteração de acesso ao grupo de Email. Acesso ao grupo concedido com sucesso.</p>
                        </div>
                        <CopyButton text="Realizada alteração de acesso ao grupo de Email. Acesso ao grupo de email concedido com sucesso." />
                      </div>
                    } />
                  </motion.div>
                  <motion.div
                    whileInView={{ x: [-25, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    className="dropdown-center"
                  > 
                    <SubDrop label="Revogar acesso" content={
                      <div className="log-btn-folder">
                        <div>
                          <p>Realizada alteração de acesso ao grupo de Email. Acesso ao grupo revogado com sucesso.</p>
                        </div>
                        <CopyButton text="Realizada alteração de acesso ao grupo de Email. Acesso ao grupo de email revogado com sucesso."  />
                      </div>
                    } />
                  </motion.div>
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
