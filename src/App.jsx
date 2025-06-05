import { useState } from 'react'

import './App.css'

// importing components
import { Home } from './components/Home'
import { GamePage } from './components/GamePage'


function App() {

  const [isGameLoaded,setIsGameLoaded] = useState(false);

  return (
    <main className='h-screen max-w-1180px flex justify-center items-center px-1 py-2 md:px-7 bg-gray-200 transition-all duration-300 overflow-hidden '>
      <div className="w-full max-w-[1180px] ">
      {
          !isGameLoaded ? <Home isGameLoaded = {isGameLoaded} setIsGameLoaded ={setIsGameLoaded} /> : <GamePage></GamePage>
      }
     
      
      </div>
    </main>
  )
}

export default App
