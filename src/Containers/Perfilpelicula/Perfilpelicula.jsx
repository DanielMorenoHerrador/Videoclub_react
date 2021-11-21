
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Perfilpelicula = (props) => {

    // let token = {
    //     headers: { Authorization: `Bearer ${props.credentials.token}` },
    // };
    const history = useNavigate();

    const [pelicula, setPelicula] = useState(
        JSON.parse(localStorage.getItem("escogerPelicula"))
    );
    
    useEffect(() => {
        console.log(props.datos_pelicula);
    }, []);

    //Hook

    const [alquilarpelicula, setAlquilarpelicula] = useState(<button className="botonalqui" onClick={() => order()}>ALQUILAR PELICULA</button>);

    //crear nuevo pedido
    const order = async (props) => {
        //console.log("la id de la peli que voy a pedir es......",peli.id);
        //Generación del body
        let body = {

            userId: props.credentials.user.id,
            peliculaId: pelicula.id,
            
        }

        //Conexion a axios y envio de datos
        console.log("ENVIANDO AL BACKEND ESTO....", body);


        try {

            let res = await axios.post("http://localhost:4000/pedidos", body, {
                headers: {
                    'Authorization': `Bearer ${props.credentialsReducer.token}`
                }
            });

            // let datos = res.data;
            // localStorage.getItem("escogerPelicula", JSON.stringify(escogerLaPelicula));





            setAlquilarpelicula("✓ Pelicula alquilada");


            setTimeout(() => {
                history("/profile");
            }, 2000);



        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="profilePelicula">
                <div className="perfilpelicula"><p>{pelicula.title}</p></div>
                <div className="perfilpelicula"><img alt={pelicula.poster_path} className="cartel" src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`} /></div>
            <div className="fichapelicula">
                <div className="perfilpelicula"><p>{pelicula.vote_average}⭐</p></div>
                <div className="perfilpelicula"><p>{pelicula.release_date}</p></div>
                <div className="perfilpelicula"><p>{pelicula.overview}</p></div>
                <button className="botonalqui" onClick={() => order()}>ALQUILAR PELICULA</button>
            </div>
        </div>

    )

}

export default connect((state) => ({
    datos_pelicula: state.datos_pelicula,
    credentialsReducer: state.credentialsReducer
}))(Perfilpelicula);