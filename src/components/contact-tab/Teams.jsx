import { useState } from "react";
import CopyButton from "../copy/CopyButton";
import "./CTab.css";

function Teams() {
  const [toggleState, setToggleState] = useState(1);
  const [solicitante, setSolicitante] = useState("");
  const [chamado, setChamado] = useState("");

  const toggleTab = (index) => {
    setToggleState(index);
  };
  
  // contato manhã
  const tm = `Bom dia ${solicitante}! Sou o Brian do Helpdesk.
Contato Referente ao chamado: ${chamado}
Podemos realizar atendimento agora?
  `;

  // contato tarde
  const tt = `Boa tarde ${solicitante}! Sou o Brian do Helpdesk.
Contato Referente ao chamado: ${chamado}
Podemos realizar atendimento agora?
  `;

  // contato noite
  const tn = `Boa noite ${solicitante}! Sou o Brian do Helpdesk.
Contato Referente ao chamado: ${chamado}
Podemos realizar atendimento agora?
  `;

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Manhã
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tarde
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Noite
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="input-group">
            <label htmlFor="solicitante-input">Solicitante:</label>
            <input
              type="text"
              id="solicitante-input"
              value={solicitante}
              onChange={(event) => setSolicitante(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="chamado-input">Chamado:</label>
            <input
              type="text"
              id="chamado-input"
              value={chamado}
              onChange={(event) => setChamado(event.target.value)}
            />
          </div>
          <div className="copy">
            <CopyButton text={tm} className='copy-btn' />
          </div>
          <p>Bom dia {solicitante}! Sou o Brian do Helpdesk</p>
          <br />
          <p>Contato referente ao chamado: {chamado}</p>
          <br />
          <p>Podemos realizar atendimento agora?</p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="input-group">
            <label htmlFor="solicitante-input">Solicitante:</label>
            <input
              type="text"
              id="solicitante-input"
              value={solicitante}
              onChange={(event) => setSolicitante(event.target.value)}
              />
              </div>
              <div className="input-group">
              <label htmlFor="chamado-input">Chamado:</label>
              <input
              type="text"
              id="chamado-input"
              value={chamado}
              onChange={(event) => setChamado(event.target.value)}
              />
              </div>
              <div className="copy">
              <CopyButton text={tt} className='copy-btn' />
              </div>
              <p>Boa tarde {solicitante}! Sou o Brian do Helpdesk</p>
              <br />
              <p>Contato referente ao chamado: {chamado}</p>
              <br />
              <p>Podemos realizar atendimento agora?</p>
              </div>
              <div
      className={toggleState === 3 ? "content  active-content" : "content"}
    >
      <div className="input-group">
        <label htmlFor="solicitante-input">Solicitante:</label>
        <input
          type="text"
          id="solicitante-input"
          value={solicitante}
          onChange={(event) => setSolicitante(event.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="chamado-input">Chamado:</label>
        <input
          type="text"
          id="chamado-input"
          value={chamado}
          onChange={(event) => setChamado(event.target.value)}
        />
      </div>
      <div className="copy">
        <CopyButton text={tn} className='copy-btn' />
      </div>
      <p>Boa noite {solicitante}! Sou o Brian do Helpdesk</p>
      <br />
      <p>Contato referente ao chamado: {chamado}</p>
      <br />
      <p>Podemos realizar atendimento agora?</p>
    </div>
  </div>
</div>
);
}

export default Teams;
