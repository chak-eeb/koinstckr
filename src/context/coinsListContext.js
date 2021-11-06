import React, { useState } from 'react'
import { createContext } from "react";


export const CoinslistContext = createContext()

export const CoinsListContextProvider = props =>{
    const [coinsList, setCoinsList] = useState(['bitcoin', 'ethereum', 'ripple', 'tron'])
    return (
        <CoinslistContext.Provider value={{coinsList}}>
            {props.children}
        </CoinslistContext.Provider>
    )
}