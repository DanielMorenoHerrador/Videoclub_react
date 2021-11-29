
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import loading from '../../assets/img/loading.gif';


const Pedidos = (props) => {

    //HOOKS
    const [pedidos, setPedidos] = useState([]);
    const [msgError, setmsgError] = useState("");

    useEffect(() => {

        setTimeout(() => {

            traerPedidos();
        }, 2000);

    }, []);

    useEffect(() => {

    });

    const traerPedidos = async () => {
        try {
            let res = await axios.get("https://videoclub1.herokuapp.com/pedidos");
                setPedidos(res.data);
        } catch (error) {
            setmsgError("No se ha podido traer los pedidos");
        }
    };

    if (pedidos[1]?.userId) {
        return (
        <div className="designPedidos">
            {pedidos.map((pedido) => {
                return (
                    <div key={pedido.id} className="pedidosContainer">
                        <h4>pedido Number: {pedido.id}</h4>
                        <p>User Name: {pedido.user}</p>
                        <p>User ID: {pedido.userId}</p>
                        <p>Rented pelicula: {pedido.pelicula?.id}</p>
                        <p>pelicula ID: {pedido.peliculaId}</p>
                    </div>
                );}
        )
        
    } </div>
        )}  else {

        return (
            <div>
                <img className="loader" src={loading} />
            </div>
        )
    }}
    

export default Pedidos;