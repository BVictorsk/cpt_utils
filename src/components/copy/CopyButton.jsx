import React, { useState, useEffect } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import styled from '@emotion/styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Button  = styled.button`
  background: ${props => props.theme.palette.copyButton.main};
  width: 10rem;
  color: white;
  font-family: inherit;
  padding: 0.35rem;
  padding-left: 1.2rem;
  font-size: 17px;
  font-weight: 500;
  border-radius: 0.9rem;
  border: none;
  letter-spacing: 0.05rem;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6rem -0.6rem ${props => props.theme.palette.copyButton.main};
  overflow: hidden;
  position: relative;
  height: 3.5rem;
  
  .icon {
    background: white;
    margin-left: 1rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    width: 2rem;
    border-radius: 0.7rem;
    box-shadow: 0.1rem 0.1rem 0.6rem 0.2rem ${props => props.theme.palette.copyButton.main};
    right: 0.35rem;
    transition: all 0.3s;
  }

  &:hover .icon {
    width: calc(100% - 0.6rem);
  }

  .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: ${props => props.theme.palette.copyButton.main};;
  }
}
  

  .copied {
  background-color: ${props => props.theme.palette.copyButton.main};
  color: #000;
  }

  .Toastify__progress-bar {
    background-color:  ${props => props.theme.palette.copyButton.main};
  }

  .Toastify__toast--success svg {
    fill: ${props => props.theme.palette.copyButton.main};
  }
  

`;


function CopyButton(props) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    const el = document.createElement("textarea");
    el.value = props.text.replace(/\n/g, "\r\n"); // adiciona quebras de linha para a cópia
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    toast.success("Texto copiado com sucesso!");
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 500); // Define o tempo em milissegundos (3 segundos, neste caso)
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <>
      <Button
        className={`copy-button ${copied ? "copied" : ""}`}
        onClick={handleClick}
      >
        {copied ? "Copiado!" : "Copiar"}
        <div className="icon">
          <AiOutlineCopy />
        </div>
      </Button>
      <ToastContainer autoClose={500}/>
    </>
  );
}

export default CopyButton;
