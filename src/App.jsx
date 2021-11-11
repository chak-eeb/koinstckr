import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { CoinsListContextProvider } from './context/coinsListContext'
import './App.css'
import Header from './components/Header'
import Details from './pages/Details'
import Summary from './pages/Summary'

const App = () => {
    return (
       
           <div>
               <CoinsListContextProvider>
                    <BrowserRouter>
                        <Header />
                        <Summary />
                        <Routes>
                        <Route exact path="/" component={Summary} />
                        </Routes>
                    </BrowserRouter>
               </CoinsListContextProvider>
           </div>
      
    )
}

export default App


