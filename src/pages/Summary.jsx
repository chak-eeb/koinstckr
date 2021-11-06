import React from 'react'
import AddCoin from '../components/AddCoin'
import CoinsList from '../components/CoinsList'
import '../App.css'

const Summary = () => {
    return (
        <div className='summary p-5'>
          <AddCoin />
          <CoinsList />
        </div>
    )
}

export default Summary
