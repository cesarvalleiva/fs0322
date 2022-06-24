import React from 'react'
import { useContext } from 'react'
import { Context } from '../../store/AppContext'

const BotonSuccess = () => {
    const {texto} = useContext(Context)
    
  return (
    <button className='btn btn-success'>{texto}</button>
  )
}

export default BotonSuccess