import { useState, createContext } from "react";

export const Context = createContext(null)

const UserProvider = ({children}) => {
    const [texto, setTexto] = useState('Lunes')
    const [contador, setContador] = useState(2000)

    const add = (num1, num2) => {
        return num1 + num2
    }

    return(
        <Context.Provider value={{texto, setTexto, contador, setContador, add}}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider;