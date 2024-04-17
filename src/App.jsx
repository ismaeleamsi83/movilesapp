import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
import { Body } from './components/body'
import { db } from './data/db'

function App() {
  const [count, setCount] = useState(0)

  const [data] = useState(db)
  const [cart, setCart] = useState([])


  function addPhone(item){

    const itemInCart = cart.find((i)=> i.id === item.id)
    if(itemInCart){
      const cartUpdate = cart.map((itemCart)=>{
        if(itemCart.id === item.id){
          return{...itemCart , quantity: itemCart.quantity +1}
        }else{
          return{...itemCart}
        } 
      })
      setCart(cartUpdate)
    }else{
      item.quantity = 1
      setCart([...cart, item])
    }
    
  }

  function removePhone(id){
    console.log('remove', id)
    const  filtredPhones = cart.filter((phone)=> phone.id !== id )
    setCart(filtredPhones)
  }

  return (
    <>
      <Header 
        cart={cart}
        removePhone={removePhone}
      />
      <Body

        db={data}
        addPhone={addPhone}
        
      className="body-content" />
    </>
  )
}

export default App
