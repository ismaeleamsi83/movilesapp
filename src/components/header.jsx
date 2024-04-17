

export function Header({cart, removePhone}){
    console.log(cart)

    
    let totalPrice = 0
    if(cart.length != 0){
        console.log('ok')
        cart.map((element) => {
            totalPrice = totalPrice + (element.precio * element.quantity)
        });
    }
    

    
    return(
        <>
            <header>
                <img src="/img/carrito-de-compras.png" alt="" className="icon-carrito" />
                <h1>MóvilesAPP</h1>

                <div className="carrito">
                    <table>
                        <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cant</th>
                        </tr>
                        </thead>
                        <tbody>
                            {cart.map((itemCart)=>(
                                <tr key={itemCart.id}> 
                                    <td><img src={itemCart.imagen_referencia} alt="" /></td>
                                    <td>{itemCart.titulo}</td>
                                    <td>{itemCart.precio}€</td>
                                    <td>{itemCart.quantity}</td>
                                    <td><div onClick={()=>removePhone(itemCart.id)} className="but-remove">X</div></td>
                                </tr>
                            ))}
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td colSpan="2">Total: {`${totalPrice} €`}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </header>
        </>
    )
}