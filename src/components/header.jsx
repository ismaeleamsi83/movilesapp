

export function Header({cart}){
    console.log(cart)
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
                            <th>Cantidad</th>
                        </tr>
                        </thead>
                        <tbody>
                            {cart.map((itemCart)=>(
                                <tr key={itemCart.id}> 
                                    <td><img src={itemCart.imagen_referencia} alt="" /></td>
                                    <td>{itemCart.titulo}</td>
                                    <td>{itemCart.precio}€</td>
                                    <td>{itemCart.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </header>
        </>
    )
}