import React, { useState } from 'react'
import { createContext } from "react";


export const CoinslistContext = createContext()

export const CoinsListContextProvider = props =>{
    const [coinsList, setCoinsList] = useState(['bitcoin', 'ethereum', 'ripple', 'tron'])

    const deleteCoin = (coin) =>{
        setCoinsList(coinsList.filter((item )=>{
            return item !== coin
        }))
    }
    return (
        <CoinslistContext.Provider value={{coinsList, deleteCoin}}>
            {props.children}
        </CoinslistContext.Provider>
    )
}