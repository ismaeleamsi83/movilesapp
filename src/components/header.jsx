

export function Header({cart, removePhone, sumPhoneQuantity, restPhoneQuantity, removeAllCart}){
    //console.log(cart)

    
    let totalPrice = 0
    if(cart.length != 0){
        //console.log('ok')
        cart.map((element) => {
            totalPrice = totalPrice + (element.precio * element.quantity)
        });
    }
    

    
    return(
        <>
            <header>
                <img src="/img/carrito-de-compras.png" alt="" className="icon-carrito" />
                <h1>PhoneHub</h1>

                <div className="carrito">
                    <table>
                        <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                        </tr>
                        </thead>
                        <tbody>
                            {cart.map((itemCart)=>(
                                <tr key={itemCart.id}> 
                                    <td><img src={itemCart.imagen_referencia} alt="" /></td>
                                    <td>{itemCart.titulo}</td>
                                    <td>{itemCart.precio}€</td>
                                    <td><span className="but-more" onClick={()=>{restPhoneQuantity(itemCart.id)}}>-</span> {itemCart.quantity} <span className="but-more" onClick={()=>{sumPhoneQuantity(itemCart.id)}}>+</span></td>
                                    <td>
                                        <div onClick={()=>removePhone(itemCart.id)} className="but-remove">X</div>
                                    
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td colSpan="2" className="total-price">Total: {`${totalPrice}€`}</td>
                            </tr>
                            <tr>
                                <td colSpan={5}>
                                    <button className="clean-basket" onClick={()=>{removeAllCart()}}>Vaciar Carrito</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </header>
        </>
    )
}