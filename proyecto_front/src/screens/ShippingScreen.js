import React from 'react'
import { Link } from 'react-router-dom';
import imagenes from '../assets/img/imagenes';

export default function ShippingScreen() {
    return (
        <div className="main_p">
            <div class="registro_logo">
                <img src={imagenes.img_among} class="large" alt="" />
                <h1 className="main_titulos">
                    Ups! Esto no debería haber pasado.
                </h1>
                
                <Link to="/">
                    Volver
                </Link>
                
           </div>



        </div>
    )
}
