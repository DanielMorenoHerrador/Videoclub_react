
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Perfilpelicula = (props) => {

    const history = useNavigate();

    //Hooks

    const [pelicula, setPelicula] = useState(JSON.parse(localStorage.getItem("escogerPelicula")));
    const [pedido, setPedido] = useState({ userId: '', peliculaId: '' });
    

    //UseEFFECT

    useEffect(() => {
    
    },[]);

    useEffect(() => {
    
    });

    //crear nuevo pedido
    const order = async (pelicula) => {
        console.log(pelicula);
        let body = {
            userId: props.credentials.user.id,
            peliculaId: pelicula.id,
            alquiler: new Date(),
            devolucion: new Date()
        }

        //Conexion a axios y envio de datos
        console.log("ENVIANDO AL BACKEND ESTO....", body);


        try {

            let res = await axios.post("https://videoclub1.herokuapp.com/pedidos", body)
            setPedido(res.data);
            ;

            setTimeout(() => {
                history("/");
            }, 2000);



        } catch (error) {
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
    datos_pelicula: state.datos_pelicula,
    credentialsReducer: state.credentialsReducer
}))(Perfilpelicula);