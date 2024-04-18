import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
import { Body } from './components/body'
import { db } from './data/db'
import { Footer } from './components/footer'

function App() {
  
  const initialLocalStorage = ()=>{
    const localStorageCart = localStorage.getItem('cart')
    return  localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const [data] = useState(db)
  const [cart, setCart] = useState(initialLocalStorage)

  const MAX_PHONE = 5
  const MIN_PHONE = 1

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  
  useEffect(()=>{
    
    localStorage.setItem('cart', JSON.stringify(cart))
    
  }, [cart]) 


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
    const  filtredPhones = cart.filter((phone)=> phone.id !== id )
    setCart(filtredPhones)
  }

  function  sumPhoneQuantity(id){
    cart.forEach((phone)=>{
      if (phone.id === id && phone.quantity < MAX_PHONE) {
        phone.quantity ++
      }
    })
    setCart([...cart]);
  }

  function restPhoneQuantity(id){
    cart.forEach((phone)=>{
      if (phone.id === id && phone.quantity > MIN_PHONE) {
        phone.quantity -- 
      }
      setCart([...cart])
    })
  }

  function removeAllCart(){
    setCart([])
    localStorage.removeItem('cart')
  }

  return (
    <>
      <Header 
        cart={cart}
        removePhone={removePhone}
        sumPhoneQuantity={sumPhoneQuantity}
        restPhoneQuantity={restPhoneQuantity}
        removeAllCart={removeAllCart}
        className="header-content"
      />
      <Body

        db={data}
        addPhone={addPhone}
        
      className="body-content" />
      <Footer className="footer-conter" />
    </>
  )
}

export default App
