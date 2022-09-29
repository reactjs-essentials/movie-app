import React, {useState} from 'react'

const Context = React.createContext({})

export function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState(['light'])
    return (        
        <Context.Provider value={{theme, setTheme}}>
            {children}
        </Context.Provider>)
}


export default Context