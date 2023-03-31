import { useState } from "react";
import CopyButton from "../copy/CopyButton";
import "./CTab.css";

function CTab2() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  
//sem contato manhã
  const scm = `Bom dia!
  
Não identificamos numero de telefone para contato.
  
Favor retornar contato com Helpdesk assim que possivel.
  
Atenciosamente, Helpdesk`;

//sem contato tarde
  const sct = `Boa tarde!
  
Não identificamos numero de telefone para contato.
  
Favor retornar contato com Helpdesk assim que possivel.
  
Atenciosamente, Helpdesk`;

//sem contato noite
  const scn = `Boa noite!
  
Não identificamos numero de telefone para contato.
  
Favor retornar contato com Helpdesk assim que possivel.
  
Atenciosamente, Helpdesk`;

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
          <div className="copy">
            <CopyButton text={scm} className='copy-btn' />
          </div>
          <p>Bom dia!</p>
          <br />
          <p>Não identificamos numero de telefone para contato.</p>
          <br />
          <p>Favor retornar contato com Helpdesk assim que possivel.</p>
          <br />
          <p>Atenciosamente, Helpdesk</p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="copy">
            <CopyButton text={sct} className='copy-btn' />
          </div>  
          <p>Boa tarde!</p>
          <br />
          <p>Não identificamos numero de telefone para contato.</p>
          <br />
          <p>Favor retornar contato com Helpdesk assim que possivel.</p>
          <br />
          <p>Atenciosamente, Helpdesk</p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="copy">
            <CopyButton text={scn} className='copy-btn' />
          </div>  
          <p>Boa noite!</p>
          <br />
          <p>Não identificamos numero de telefone para contato.</p>
          <br />
          <p>Favor retornar contato com Helpdesk assim que possivel.</p>
          <br />
          <p>Atenciosamente, Helpdesk</p>
        </div>
      </div>
    </div>
  );
}

export default CTab2;