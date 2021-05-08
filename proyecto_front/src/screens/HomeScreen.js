import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import imagenes from '../assets/img/imagenes';


export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const ProductosCat = [
    { width: 100, itemsToShow: 1 },
    { width: 300, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 640, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 900, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
    { width: 1440, itemsToShow: 8 },
  ];

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="main_h">

          <Carousel>
            <img src={imagenes.img_home_1} alt="" />
            <img src={imagenes.img_home_2} alt="" />
            <img src={imagenes.img_home_3} alt="" />
          </Carousel>
          <h1 class="main_titulos"> Categorías </h1>
          <Carousel breakPoints={ProductosCat}>

            <div className="card">
            <img className="medium" src="https://http2.mlstatic.com/D_NQ_NP_794666-MPE44817509779_022021-O.jpg" alt=""/>
              <div className="card-body">
                <Link to={`/category/Computadoras`}>
                  <h5 className="card-title">Computadoras</h5>
                </Link>
              </div>
            </div>

            <div className="card">
            <img className="medium" src="https://i.blogs.es/eaa23c/gigabyte-geforce-gtx-1070-wf2-oc-rev-20-8gb-gddr5-tarjeta-grafica-001/450_1000.jpg" alt=""/>
              <div className="card-body">
                <Link to={`/category/GPU`}>
                  <h5 className="card-title">Tarjetas Gráficas</h5>
                </Link>
              </div>
            </div>

            <div className="card">
            <img className="medium" src="https://www.profesionalreview.com/wp-content/uploads/2018/11/Son-necesarios-los-disipadores-en-la-memoria-RAM-2.jpg" alt=""/>
              <div className="card-body">
                <Link to={`/category/RAM`}>
                  <h5 className="card-title">Memorias RAM</h5>
                </Link>
              </div>
            </div>

            <div className="card">
            <img className="medium" src="https://topesdegama.com/app/uploads-topesdegama.com/2020/11/Samsung-C27R502.jpg" alt=""/>
              <div className="card-body">
                <Link to={`/category/Monitores`}>
                  <h5 className="card-title">Monitores</h5>
                </Link>
              </div>
            </div>

            <div className="card">
            <img className="medium" src="https://www.infotec.com.pe/27002-thickbox_default/case-gamer-halion-spider-c907-s_fuente-rgb-temp-cr.jpg" alt=""/>
              <div className="card-body">
                <Link to={`/category/Cases`}>
                  <h5 className="card-title">Gabinetes</h5>
                </Link>
              </div>
            </div>

            <div className="card">
            <img className="medium" src="https://www.intel.ca/content/dam/www/global/badges/badge-9th-gen-core-i9.png.rendition.intel.web.480.360.png" alt=""/>
              <div className="card-body">
                <Link to={`/category/Procesadores`}>
                  <h5 className="card-title">Procesadores</h5>
                </Link>
              </div>
            </div>

            <div className="card">
            <img className="medium" src="https://imagenes.coolmod.com/samsung-970-evo-plus-1tb-nvme-disco-ssd-001.jpg" alt=""/>
              <div className="card-body">
                <Link to={`/category/SSD`}>
                  <h5 className="card-title">Almacenamiento</h5>
                </Link>
              </div>
            </div>

            

          </Carousel>
          <h1 class="main_titulos">Novedades</h1>
          <Carousel breakPoints={ProductosCat}>
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </Carousel>


        </div>
      )}
    </div>
  );
}