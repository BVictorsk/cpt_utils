import React from 'react'
import CopyButton from '../../copy/CopyButton'
import './Oji.css'

const OjiScript = () => {
  return (
    <>
        <div className='oji-description'>
          <h3>Description: | Nitro</h3>
          <div className="efetivos">
            <p>Efetivos: Efetivo / DRT - Piracicaba</p>
            <CopyButton text='Efetivo / DRT - Piracicaba'  />
          </div>
          <div className="estagiarios">
            <p>Estagiarios: Estagiário(a) / DRT - Piracicaba</p>
            <CopyButton text='Estagiário(a) / DRT - Piracicaba'  />
          </div>
          <div className="menor-aprendiz">
            <p>Menor aprendiz: Menor Aprendiz / Piracicaba</p>
            <CopyButton text='Menor Aprendiz / Piracicaba'  />
          </div>
          <div className="terceiro">
            <p>Terceiros: Terceiro / Nome da Empresa</p>
            <CopyButton text='Terceiro / Nome da Empresa'  />
          </div>
        </div>
        <div className='oji-office'>
          <p>Office: Piracicaba</p>
          <CopyButton text='Piracicaba'  />
        </div>
        <div className='oji-company'>
          <p>Company: Oji Papéis Especiais. </p>
          <CopyButton text='Oji Papéis Especiais.'  />
        </div>
        <div className='oji-acessos'>
            <h3>Description: | Nitro</h3>
            <div className="efetivos">
                <p>Efetivos: PC - TODOS; FSSO_RESTRITO; PC - Efetivos;</p>
                <CopyButton text='PC - TODOS; FSSO_RESTRITO; PC - Efetivos;'  />
            </div>
            <div className="estagiarios">
                <p>Estagiarios: PC - TODOS; FSSO_RESTRITO; PC - Estagiarios;</p>
                <CopyButton text='PC - TODOS; FSSO_RESTRITO; PC - Estagiarios;'  />
            </div>
            <div className="menor-aprendiz">
                <p>Menor aprendiz: PC - TODOS; FSSO_RESTRITO; PC - Aprendiz;</p>
                <CopyButton text='PC - TODOS; FSSO_RESTRITO; PC - Aprendiz;'  />
            </div>
            <div className="terceiro">
                <p>Terceiros: PC - TODOS; FSSO_RESTRITO; PC - Terceiros;</p>
                <CopyButton text='PC - TODOS; FSSO_RESTRITO; PC - Terceiros;'  />
            </div>
        </div>
    </>
  )
}

export default OjiScript