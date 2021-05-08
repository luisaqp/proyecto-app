import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';


export default function CartScreen(props) {
    const productId = props.match.params.id;
    const cant = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, cant));
        }
    }, [dispatch, productId, cant]);

    const removeFromCartHandler = (id) => {
        //delete action
        dispatch(removeFromCart(id));
    };
    const checkoutHandler = () => {
        props.history.push('/signin?redirec=shipping');

    }
    return (
        <div class="row_c top_c main_cart">
            <div className="col_2_cart">
                <div>
                    <h1 className="titles">Carrito de Compras</h1>
                </div>
                {cartItems.length === 0 ?
                    <MessageBox>
                        <div>
                            No hay productos en tu carrito. <Link to="/">Vamos a comprar!</Link>
                        </div>

                    </MessageBox>
                    : (
                        <ul>
                            {
                                cartItems.map((item) => (
                                    <li key={item.product}>
                                        <div className="row">
                                            <div>
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="small" />
                                            </div>
                                            <div className="min-30">
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </div>
                                            <div>
                                                <select value={item.cant}
                                                    onChange={e =>
                                                        dispatch(
                                                            addToCart(item.product, Number(e.target.value))

                                                        )}
                                                >
                                                    {
                                                        [...Array(item.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}</option>
                                                        )
                                                        )}
                                                </select>
                                            </div>
                                            <div>S/.{item.price}</div>
                                            <div>
                                                <button
                                                    type="button"
                                                    onClick={() => removeFromCartHandler(item.product)}
                                                ><i className="fas fa-trash-alt" /></button>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }


            </div>

            <div className="col-1_cart">
                <div className="card card_pago">
                    <ul>
                        <div className="row_total">
                            <h2 className="c_titles" >
                            Subtotal 
                            </h2>
                            <div className="c_titles">
                            S/.{cartItems.reduce((a, c) => a + c.price * c.cant, 0)}
                            </div>

                        </div>
                        <li>
                            <button
                                type="button"
                                onClick={checkoutHandler}
                                className="primary block"
                                disabled={cartItems.length === 0}
                            >
                                Comprar!
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
;