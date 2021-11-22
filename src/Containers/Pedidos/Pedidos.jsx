
import React, { useState } from 'react';
import axios from 'axios';


const Pedidos = (props) => {

    //HOOKS
    const [pedidos, setPedidos] = useState([]);
    const [msgError, setmsgError] = useState("");

    const traerPedidos = async () => {
        try {
            let res = await axios.get(
                "http://localhost:4000/pedidos"
            );
            setPedidos(res.data);
        } catch (error) {
            setmsgError("Order not found");
        }
    };

    return (
        <div className="designPedidos">
            Estas en pedidos
        </div>
    )

}

export default Pedidos;