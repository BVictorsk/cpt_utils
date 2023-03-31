import React, { useState } from 'react'
import CopyButton from '../../copy/CopyButton';
import './Nitro.css'

const NitroLog = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");

    const nitroLog = `Realizada criação de usuário com sucesso.Segue abaixo credenciais de acesso.
    
Usuário: ${user}
E-mail: ${email}
Senha: nitro@2023
    
    `;

  return (
    <div>
        <form>
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
        </form>
        <div className='nitro-log'>
            <p>
                Realizada criação de usuário com sucesso. Segue abaixo credenciais de acesso.
            </p>
            <p>Usuário: {user}</p>
            <p>Email: {email}</p>
            <p>Senha: **********</p>
        </div>
        
        <div className='margin'>
            <CopyButton text={nitroLog} className='copy-btn' />
        </div>
        <div className='margin'>
            <p>Log notificar Reponsaveis:</p>
            <CopyButton text="Responsaveis notificados via email." className='copy-btn' />
        </div>

    </div>
  )
}

export default NitroLog