import React from 'react'
import './Formulario.css'
import Simpsons from '../../img/simpsons.jpg'

const Formulario = () => {
  return (
    <form className='formularioLogin'>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1"  />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
    </form>
  )
}

export default Formulario