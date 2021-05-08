import React from 'react'
import { Link } from 'react-router-dom';

export default function Product(props) {
    
    const { product } = props;

    
    return (
        <div key={product._id} className="card">
            <button className="btn btn_corazon">
                <i className="far fa-heart"></i>
            </button>
            <Link to={`/product/${product._id}`}>
                <img className="medium" src={product.image} alt={product.name} />
            </Link>
            <div className="card-body">
                <Link to={`/product/${product._id}`}>
                    <h5 className="card-title">{product.name}</h5>
                </Link>
                <p className="price card-text">S/.{product.price}</p>
                <Link to={`/product/${product._id}`}>
                <button type="btn" className="btn btn-light btn_card_comprar">Ver Producto</button>
                </Link>
                
            </div>
        </div>
    );
}