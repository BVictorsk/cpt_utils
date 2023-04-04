import { useState } from "react";
import CopyButton from "../copy/CopyButton";
import "./CTab.css";

function CTab1() {
  const [toggleState, setToggleState] = useState(1);
  const [solicitante, setSolicitante] = useState("");
  const [numero, setNumero] = useState("");
  const [contato, setContato] = useState("");

  const toggleTab = (index) => {
    setToggleState(index);
  };
  
  //sem contato manhã
  const tm =  `Bom dia ${solicitante}!
  
Realizada tentativa de contato no numero ${numero}
  
Favor retornar contato com Helpdesk assim que possivel: ${contato}.
  
Atenciosamente, Helpdesk`;

  //sem contato tarde
  const tt = `Boa tarde ${solicitante}!
  
Realizada tentativa de contato no numero ${numero}
    
Favor retornar contato com Helpdesk assim que possivel: ${contato}.
    
Atenciosamente, Helpdesk`;

  //sem contato noite
  const tn = `Boa noite ${solicitante}!
  
Realizada tentativa de contato no numero ${numero}
    
Favor retornar contato com Helpdesk assim que possivel: ${contato}.
    
Atenciosamente, Helpdesk`

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
            <label htmlFor="numero-input">Numero:</label>
            <input
              type="text"
              id="numero-input"
              value={numero}
              onChange={(event) => setNumero(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="contato-select">Contato:</label>
              <select id="contato-select" value={contato} onChange={(event) => setContato(event.target.value)}>
                <option value="">Selecione Contato do Helpdesk</option>
                <option value="(11) 2134-9011 /(11) 2147-6459">Nitro</option>
                <option value="(11) 2134-9024 / (11) 2147-6462">Oji</option>
              </select>
          </div>
          <div className="copy">
            <CopyButton text={tm} className='copy-btn' />
          </div>
          <p>Bom dia {solicitante}!</p>
          <br />
          <p>Realizada tentativa de contato no numero {numero}</p>
          <br />
          <p>Favor retornar contato com Helpdesk assim que possivel: {contato}.</p>
          <br />
          <p>Atenciosamente, Helpdesk.</p>
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
            <label htmlFor="numero-input">Numero:</label>
            <input
              type="text"
              id="numero-input"
              value={numero}
              onChange={(event) => setNumero(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="contato-select">Contato:</label>
              <select id="contato-select" value={contato} onChange={(event) => setContato(event.target.value)}>
                <option value="">Selecione Contato do Helpdesk</option>
                <option value="(11) 2134-9011 /(11) 2147-6459">Nitro</option>
                <option value="(11) 2134-9024 / (11) 2147-6462">Oji</option>
              </select>
          </div>
          <div className="copy">
            <CopyButton text={tt} className='copy-btn' />
          </div>
          <p>Boa tarde {solicitante}!</p>
          <br />
          <p>Realizada tentativa de contato no numero {numero}</p>
          <br />
          <p>Favor retornar contato com Helpdesk assim que possivel: {contato}.</p>
          <br />
          <p>Atenciosamente, Helpdesk.</p>
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
            <label htmlFor="numero-input">Numero:</label>
            <input
              type="text"
              id="numero-input"
              value={numero}
              onChange={(event) => setNumero(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="contato-select">Contato:</label>
              <select id="contato-select" value={contato} onChange={(event) => setContato(event.target.value)}>
                <option value="">Selecione Contato do Helpdesk</option>
                <option value="(11) 2134-9011 /(11) 2147-6459">Nitro</option>
                <option value="(11) 2134-9024 / (11) 2147-6462">Oji</option>
              </select>
          </div>  
          <div className="copy">
            <CopyButton text={tn} className='copy-btn' />
          </div>
          <p>Boa noite {solicitante}!</p>
          <br />
          <p>Realizada tentativa de contato no numero {numero}</p>
          <br />
          <p>Favor retornar contato com Helpdesk assim que possivel: {contato}.</p>
          <br />
          <p>Atenciosamente, Helpdesk.</p>
        </div>
      </div>
    </div>
);
}

export default CTab1;
