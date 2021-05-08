import React, {useState } from 'react';
import { useDispatch} from 'react-redux';
//import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addstock } from '../actions/stockActions';


export default function StockScreen(props) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';

    //const addingStock = useSelector((state) => state.addingStock);
    //const { loading, error } = addingStock;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        alert('Producto agregado correctamente');
        dispatch(addstock(name, category, image, price, countInStock, brand, description
        ));
    };


    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Añadir Producto</h1>
                </div>
                <div>
                    <label htmlFor="name">Nombre del Producto</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Nombre"
                        required
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="category">Categoría</label>
                    <input
                        type="text"
                        id="category"
                        placeholder="Categoria"
                        required
                        onChange={(e) => setCategory(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="image">Imagen</label>
                    <input
                        type="text"
                        id="image"
                        placeholder="Coloca el link de la imagen"
                        required
                        onChange={(e) => setImage(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="price">Precio</label>
                    <input
                        type="number"
                        id="price"
                        placeholder="Ingresa el precio (S/.)"
                        required
                        onChange={(e) => setPrice(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="countInStock">Cantidad</label>
                    <input
                        type="number"
                        id="countInStock"
                        placeholder="Ingresa la cantidad"
                        required
                        onChange={(e) => setCountInStock(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="brand">Marca</label>
                    <input
                        type="text"
                        id="brand"
                        placeholder="Ingresa la Marca"
                        required
                        onChange={(e) => setBrand(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="description">Descripcion</label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Ingresa una descripcion"
                        required
                        onChange={(e) => setDescription(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Añadir Producto
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Ingresar como comprador?{' '}
                        <Link to={`/signin?redirect=${redirect}`}>Iniciar Sesion</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
