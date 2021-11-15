/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Nav.css';
import View from '../Views/Views';
import Img from './img/antiguo-camara-cine-69344.gif';

const Nav = () => {
    return (
        <div className="barranav">
            <div className="Home">
                <View destino="HOME" url="/" />
            </div>
            <div className="Peliculas">
                <View destino="PELICULAS" url="/peliculas" />
            </div>
            <div className="tit">VIDEORADOS <img className="logo" src={Img}/>
            </div>            
            <div className="Registro">
                <View destino="REGISTRO" url="/register" />
            </div>
            <div className="Login">
                <View destino="LOGIN" url="/login" />
            </div>
            <div className="Perfil">
                <View destino="PERFIL" url="/profile" />
            </div>
        </div>
    )
};

export default Nav;