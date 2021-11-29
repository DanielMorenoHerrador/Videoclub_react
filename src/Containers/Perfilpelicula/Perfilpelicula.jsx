
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { ORDER } from '../../redux/types';


const Perfilpelicula = (props) => {

    let token = {
        headers: { Authorization: `Bearer ${props.credentials.token}` },
    };

    const history = useNavigate();


    useEffect(() => {

    },);

    useEffect(() => {
    }, []);
    //Hooks

    const [pelicula, setPelicula] = useState(JSON.parse(localStorage.getItem("escogerPelicula")));
    const [pedido, setPedido] = useState([]);
    const [user, setUser] = useState([props.credentials.user]);

    console.log(user)
    console.log(pelicula);

    //crear nuevo pedido    
    const order = async () => {
        let body = {
            userId: props.credentials.user.id,
            peliculaId: pelicula.id,
            rentDate: new Date(),
            returnDate: new Date()
        }

        //Conexion a axios y envio de datos
        console.log("ENVIANDO AL BACKEND ESTO....", body, token);


        try {

            let res = await axios.post("https://videoclub1.herokuapp.com/pedidos", body, token);
            console.log("Pedido realizado");
            props.dispatch({ type: ORDER, payload:res.data });
            ;

            setTimeout(() => {
                history("/pedidos");
            }, 2000);



        } catch (error) {
            console.log('No se ha creado el pedido, error')
            console.log(error)
        }
    }



    return (
        <div className="profilePelicula">
                <div className="titulopelicula"><p>{pelicula.title}</p></div>
                <div className="posterpelicula"><img alt={pelicula.poster_path} className="cartel" src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`} /></div>
            <div className="fichapelicula">
                <div className="valoracionpelicula"><p>{pelicula.vote_average}⭐</p></div>
                <div className="fechapelicula"><p>{pelicula.release_date}</p></div>
                <div className="descripcionpelicula"><p>{pelicula.overview}</p></div>
                <button className="botonalqui" onClick={() => order()}>ALQUILAR PELICULA</button>
            </div>
        </div>

    )

}

export default connect((state) => ({
    pelicula: state.pelicula,
    credentials: state.credentials,
}))(Perfilpelicula);