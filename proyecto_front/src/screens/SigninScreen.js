import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import imagenes from '../assets/img/imagenes';

export default function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    };

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div className="registro_page main_p">
            <div class="registro_logo">
                <img src={imagenes.img_AC} class="large" alt=""/>
            </div>
                <form className="form registro_form" onSubmit={submitHandler}>
                    <div className="registro_titulo">
                        <h1 className="main_titulos">Iniciar Sesión</h1>
                    </div>
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}
                    <div>
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Ingresa tu correo Electrónico"
                            required
                            onChange={e => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Ingresa tu contraseña"
                            required
                            onChange={e => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label />
                        <button className="primary" type="submit">
                            Iniciar Sesion
                        </button>
                    </div>
                    <div>
                        <label />
                        <div>
                            Nuevo por aqui?{' '}
                            <Link to={`/register?redirect=${redirect}`}>
                                Crear cuenta
                        </Link>
                        </div>
                    </div>
                </form>
            </div>
    );
}
