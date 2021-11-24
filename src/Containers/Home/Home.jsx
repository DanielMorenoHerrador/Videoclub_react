
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
    const [buscador, setBuscador] = useState({});


    useEffect(() => {

        setTimeout(() => {

            traePeliculas();
        }, 2000);

    }, []);

    useEffect(() => {

    });


    const traePeliculas = async () => {
        let res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=51c1099989a6923f3d12154210fc2cf7&language=en-US&page=1");
        setPeliculas(res.data.results);
    };

    const escogePelicula = (escogerLaPelicula) => {
        localStorage.setItem("escogerPelicula", JSON.stringify(escogerLaPelicula));
        navigate("/Perfilpelicula");
    }

    const buscarPeliculas = (e) => {
        const filtered = peliculas.filter(word => {
            return word.original_title.toLowerCase().match(e.target.value.toLowerCase());
        })

        console.log("filtered2:", filtered)
        setBuscador(filtered);
    }

    if (peliculas[1]?.title) {

        // return (
        //     <><div className="buscador">
        //         <input className="buscarpeli" type="text" name="film" onChange={buscarPeliculas} title="film" lenght="30" placeholder="Escribe pelicula" />
        //     {buscador.length > 0 &&
        //                 <div id="solutions" className="container-equals-films">
        //                     <div className="displayPeliculas"></div>
        //                 </div>}</div><div className="container-buscador">

        //             {peliculas.map((peli) => {
        //                 return (
        //                     <div className="peli" key={peli.id}>
        //                         <img alt={peli.id} className="cartel" onClick={() => escogePelicula(peli)} src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`} />
        //                         <div className="designTitlemovie" onClick={() => escogePelicula(peli)}>{peli.title}</div>
        //                         <div className="designValue">{peli.vote_average}⭐</div>
        //                     </div>
        //                 );
        //             })}
        //         </div></>
        //         )

        return (

            <div className='container-home'>
                <div>

                    <div className="container-title-search pt-5">
                        <input className="buscador" type="text" name="film" onChange={buscarPeliculas} title="film" lenght="30" placeholder="Escribe una pelicula a buscar" />
                    </div>
                    <div className="container-buscador">


                        {buscador.length > 0 &&
                            <div id="solutions" className="displayPeliculas">

                                {buscador.map((peli) => {
                                    return (
                                        <div className="peli" key={peli.id}>
                                            <img alt={peli.id} className="cartel" onClick={() => escogePelicula(peli)} src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`} />
                                            <div className="designTitlemovie" onClick={() => escogePelicula(peli)}>{peli.title}</div>
                                            <div className="designValue">{peli.vote_average}⭐</div>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                </div>
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