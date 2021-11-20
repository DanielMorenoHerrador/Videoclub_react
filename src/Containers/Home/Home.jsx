
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import loading from '../../assets/img/loading.gif';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import datos_pelicula from '../../redux/reducers/pelicula-seleccionada-reducer';

const Home = (props) => {

    let navigate = useNavigate();

    const [peliculas, setPeliculas] = useState([]);
    const [msgError, setmsgError] = useState("");

    // let token = {
    //     headers: { Authorization: `Bearer ${props.credentials.token}` },
    // };

    useEffect(() => {

        // if (props.data.filter.filter) {
        //     return;
        // } else {
            setTimeout(() => {

                traePeliculas();
            }, 2000);
        // }

    }, []);

    useEffect(() => {
        // if (props.credentials.token !== "") {
        //   if (props.data.filter.select) {
        //     switch (props.data.filter.select) {
        //       case "id":
        //         getPeliculaById(props.data.filter.filter);
        //         break;
        //       case "title":
        //         getPeliculaByTitle(props.data.filter.filter);
        //         break;
        //       case "genre":
        //         getPeliculaByGenre(props.data.filter.filter);
        //         break;
        //       case "cast":
        //         getPeliculaByCast(props.data.filter.filter);
        //         break;
        //       case "city":
        //         getPeliculaByCity(props.data.filter.filter);
        //         break;
    
        //       default:
        //         break;
        //     }
        //   } else if (props.data.filter[0]) {
        //     setPeliculas(props.data.filter);
        //   } else {
        //     setPeliculas(props.data.movies);
        //     setmsgError("");
        //   }
        // } else if (props.data.filter[0]) {
        //   setPeliculas(props.data.filter);
        // } else {
        //   setPeliculas(props.data.movies);
        //   setmsgError("");
        // }
      }, //[props.data.filter, props.data.movies]
    );
    const traePeliculas = async () => {
        let res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=51c1099989a6923f3d12154210fc2cf7&language=en-US&page=1");
        setPeliculas(res.data.results);
    };

    const escogePelicula = (escogerLaPelicula) => {

        localStorage.setItem("escogerPelicula", JSON.stringify(escogerLaPelicula));

        //redirigire a el perfil de la película....
        navigate("/Perfilpelicula");
    }

    if (peliculas[1]?.title) {

        return (
            <div className="displayPeliculas">
                {
                    peliculas.map((peli) => {
                        return (
                            <div className="peli" key={peli.id}>
                                <img alt={peli.id} className="cartel" onClick={() => escogePelicula(peli)} src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`} />
                                <div className="designTitlemovie" onClick={() => escogePelicula(peli)}>{peli.title}</div>
                                <div className="designValue">{peli.vote_average}⭐</div>
                            </div>

                        )
                    })
                }

            </div>
        )

    } else {

        return (
            <div>
                <img className="loader" src={loading} />
            </div>
        )
    }


}

export default Home;