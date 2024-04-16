

export function Header(){
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
                            <tr>
                                <td>im</td>
                                <td>Iphone</td>
                                <td>$2000</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </header>
        </>
    )
}