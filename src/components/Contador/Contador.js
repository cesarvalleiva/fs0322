import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../store/AppContext'
import './Contador.css'

const Contador = (props) => {
    const {contador, add} = useContext(Context);
    const [counter, setCounter] = useState(contador);
    const [titulo, setTitulo] = useState('El valor del contador es:')
    const [ciudad, setCiudad] = useState('')
    const [temp, setTemp] = useState(0)
    const [humedad, setHumedad] = useState(0)

    const sumar = () => {
        setCounter(counter+1)
    }

    // const peticionClima = (city) => {
    //     //peticion fetch a la API del clima(city)
        
    // }

    const restar = () => {
        if(counter === 0 || counter < 0){
            setCounter(0)
        } else {
            setCounter(counter - 1)
        }
    }

    const cambiarTemp = () => {
        setTemp(20)
    }

    useEffect(() => {
        // setTemp(18)
        // setHumedad(95)
        // setCiudad('Chivilcoy')
        // console.log('hola');
    }, [counter, titulo, temp])

  return (
    <div className='contador'>
        <p>{titulo} {counter}</p>
        <button className='btn btn-success mt-4' onClick={()=>setCounter(counter+1)}>Sumar</button>
        <button className='btn btn-danger ms-2 mt-4' onClick={() => restar()}>Restar</button>
        <p className='mt-5'>Ciudad: {ciudad}</p>
        <p>Humedad: {humedad}%</p>
        <p>Temperatura: {temp}</p>
        <button className='btn btn-warning ms-2 mt-4' onClick={cambiarTemp}>Cambiar Temp</button>
        <input type="text" placeholder='Ingrese su ciudad' value={ciudad} onChange={() => console.log('hola')} />
        {
            add(12,14)
        }
    </div>
  )
}

export default Contador