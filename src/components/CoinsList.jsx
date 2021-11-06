import React, { useContext, useEffect, useState } from 'react'
import coinApi from '../apis/coinApi'
import { CoinslistContext } from '../context/coinsListContext'

const CoinsList = () => {
    const [coins, setCoins] = useState([])
    const {coinsList} = useContext(CoinslistContext)
    console.log(coinsList);
    useEffect(()=>{
        const fetchCoins = async () => {
            const response = await coinApi.get('/coins/markets', {
                params:{
                    vs_currency: 'usd',
                    ids: coinsList.join(',')
                }
            })
            console.log(response.data);
        }
        fetchCoins()
    })
    return (
        <div>
           
        </div>
    )
}

export default CoinsList
