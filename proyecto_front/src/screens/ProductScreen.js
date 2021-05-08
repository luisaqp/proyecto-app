import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

export default function ProductScreen(props) {

    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [cant, setCant] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?cant=${cant}`);
    }

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div>
                    
                    <div className="main_p">
                        <div className="row top producto_descr">
                            <div className="col-2">
                                <img
                                    className="large"
                                    src={product.image}
                                    alt={product.name}
                                ></img>
                            </div>
                            <div className="col-1">

                            <h1 className="p_d_name">{product.name}</h1>
                                <div>
                                    <h3>Descripción</h3>
                                    <p  className="p_d_desc">{product.description}</p>
                                </div>
                                <div>
                                    <h3>Fabricante</h3>
                                    <p  className="p_d_desc">{product.brand}</p>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="card card_product">
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div>Precio</div>
                                                <div className="price">S/.{product.price}</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div>Disponibilidad</div>
                                                <div>
                                                    {product.countInStock > 0 ? (
                                                        <span className="success">En Stock</span>
                                                    ) : (
                                                        <span className="danger">Sin Stock</span>
                                                    )}
                                                </div>
                                            </div>
                                        </li>
                                        {
                                            product.countInStock > 0 && (
                                                <>
                                                    <li>
                                                        <div className="row">
                                                            <div>Cantidad</div>
                                                            <div>
                                                                <select value={cant} onChange={e => setCant(e.target.value)}
                                                                >
                                                                    {
                                                                        [...Array(product.countInStock).keys()].map(
                                                                            x => (
                                                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                                            )
                                                                        )}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={addToCartHandler}
                                                            className="primary block">Añadir al Carrito</button>
                                                    </li>
                                                </>
                                            )}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

