import React, { useContext, useEffect, useState } from 'react'
import Coin from './Coin'
import { CoinslistContext } from '../context/coinsListContext'
import coinApi from '../apis/coinApi'

const CoinsList = () => {
    const [coins, setCoins] = useState([])
    const {coinsList, deleteCoin} = useContext(CoinslistContext)
    const [isLoading, setIsLoading] = useState(false)
    
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
        if(coinsList.length >0){
           fetchCoins()
        } else setCoins([])
    }, [coinsList])

const renderCoins = () =>{
   if(isLoading){
       return <div> loading...</div>
   }
   return (
       <ul className='coinsList'>
        {coins.map(coin =>{
            return (
                <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin}/>
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
