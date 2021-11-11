import React, { useContext, useEffect, useState } from 'react'
import Coin from './Coin'
import { CoinslistContext } from '../context/coinsListContext'
import coinApi from '../apis/coinApi'

const CoinsList = () => {
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const {coinsList} = useContext(CoinslistContext)

    console.log(coinsList);
    useEffect(()=>{
        const fetchCoins = async () => {
            setIsLoading(true)
            const response = await coinApi.get('/coins/markets', {
                params:{
                    vs_currency: 'usd',
                    ids: coinsList.join(',')
                }
            })
            setCoins(response.data);
            setIsLoading(false);
        }
        fetchCoins()
    }, [coinsList])

const renderCoins = () =>{
   if(isLoading){
       return <div> loading...</div>
   }
   return (
       <ul className='coinsList'>
        {coins?.map(coin =>{
            return (
                <Coin key={coin.id} coin={coin} />
            )
        })}
       </ul>
   )
}

    return (
        <div>
           {renderCoins()}
        </div>
    )
}

export default CoinsList
