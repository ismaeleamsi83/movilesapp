import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
import { Body } from './components/body'
import { db } from './data/db'

function App() {
  const [count, setCount] = useState(0)

  const [data] = useState(db)

  function addPhone(id){
    console.log('add phone', id)
  }

  return (
    <>
      <Header />
      <Body
      
        db={data}
        addPhone={addPhone}
        
      className="body-content" />
    </>
  )
}

export default App
