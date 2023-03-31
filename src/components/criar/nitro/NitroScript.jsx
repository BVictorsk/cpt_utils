import React from 'react'
import CopyButton from '../../copy/CopyButton'
import './Nitro.css'

const NitroScript = () => {
  return (
    <>
        <div className='nitro-display'>
          <p>Display: | Nitro</p>
          <CopyButton text='| Nitro'  />
        </div>
        <div className='nitro-office'>
          <p>Office: Nitro Química SP</p>
          <CopyButton text='Nitro Química SP'  />
        </div>
        <div className='nitro-company'>
          <p>Company: Nitro Química </p>
          <CopyButton text='Nitro Química'  />
        </div>
        <div className='nitro-script'>
          <p>Script</p>
          <CopyButton text='\\nitroquimica.local\sysvol\nitroquimica.local\scripts'  />
        </div>
        <div className='nitro-pasta'>
          <p>Pasta </p>
          <CopyButton text='L:\Users'  />
        </div>
    </>
  )
}

export default NitroScript