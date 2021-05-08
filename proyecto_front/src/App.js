import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import StockScreen from './screens/StockScreen';
import imagenes from './assets/img/imagenes.js';
import ShippingScreen from './screens/ShippingScreen.js'
import CategoryScreen from './screens/CategoryScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              <span><img src={imagenes.img_logo_header} className="navbar_logo" alt="" /></span>
            </Link>
          </div>
          <div>
            <Link to="/cart">
              <span><i className="fas fa-shopping-cart"></i></span>
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  <i className="far fa-user" />{' '}{userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/" onClick={signoutHandler}>
                      Cerrar Sesion
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Iniciar Sesión</Link>
            )}
            {userInfo && userInfo.isAdmin &&
              <span>
                <Link to="/newstock"><i class="fas fa-plus-square fa_add"/></Link>
              </span>
            }
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/newstock" component={StockScreen}></Route>
          <Route path="/categories" component={CategoryScreen}></Route>
          <Route path="/shipping" component={ShippingScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          

        </main>
        <footer className="footer_nav">
          <span><img src={imagenes.img_logo_footer} className="footer_logo" alt="" /></span>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;