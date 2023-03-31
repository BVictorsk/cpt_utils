import React, { useState, useEffect } from "react";
import "./CopyButton.css";

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
    <button
      className={`copy-button ${copied ? "copied" : ""}`}
      onClick={handleClick}
    >
      {copied ? "Copiado!" : "Copiar"}
    </button>
  );
}

export default CopyButton;
