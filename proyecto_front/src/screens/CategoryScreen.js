
import React, { useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';


export default function CategoryScreen() {

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch]);

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div>
            {products.map((product) => (
              <Product key={product.category} product={product}></Product>
            ))}
                </div>
            )}
        </div>
    )
}

