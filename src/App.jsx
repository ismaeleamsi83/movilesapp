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
  const [cart, setCart] = useState([])

  function addPhone(item){

    const itemInCart = cart.find((i)=> i.id === item.id)
    if(itemInCart){
      alert('SI esta en el carrito le subo la cantidad')
      const cartUpdate = cart.map((itemCart)=>{
        if(itemCart.id === item.id){
          alert('subo la cantidad')
          return{...itemCart , quantity: itemCart.quantity +1}
        }else{
          return{...itemCart}
        } 
      })
      setCart(cartUpdate)
    }else{
      alert('NO esta en el carrito lo añado')
      item.quantity = 1
      setCart([...cart, item])
    }
    // console.log('add phone', item.id)
    // if(cart.length == 0){
    //   item.quantity = 1
    //   setCart([...cart, item])
    // }else{
    //   cart.map((movil)=>{
    //     if(movil.id === item.id){
    //       movil.quantity ++
    //       console.log(movil)
    //     }else{
    //       item.quantity = 1
    //       setCart([...cart, item])
    //     }
        
    //   })
    // }
    
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
