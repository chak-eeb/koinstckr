import React from 'react'
import { Link } from 'react-router-dom'

const Coin = ({coin, deleteCoin}) => {
    return (
        <Link to='/coinDetails' className='rounded text-decoration-none coin'>
        <li className="d-flex justify-content-between align-items-center text-dark coinList-item list-group-item list-group-item-action">
            <img  src={coin.image} alt=''/>
            <div className='d-flex w-50 justify-content-between align-items-center'>
            <span className="text-decoration-none">{coin.current_price}</span>
            {coin.price_change_percentage_24h > 0 ? 
            <span className="price-change text-success mr-2">
                <i className="fas fa-sort-up align-middle mr-2"></i>
                {coin.price_change_percentage_24h.toFixed(2)}
            </span>
                : 
                <span className="price-change text-danger mr-2">
                    <i className="fas fa-sort-down align-middle mr-2"></i>
                    {coin.price_change_percentage_24h.toFixed(2)}
                </span>}
                
                <i 
                onClick={(e)=>{
                    e.preventDefault()
                    deleteCoin(coin.id)
                }}
                className="delete-icon far fa-times-circle text-danger"></i>
            </div>
        </li>
        </Link>
    )
}

export default Coin
