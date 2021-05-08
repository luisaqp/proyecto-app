import Axios from 'axios';
import {
  STOCK_ADD_FAIL,
  STOCK_ADD_REQUEST,
  STOCK_ADD_SUCCESS
} from '../constants/stockConstants';


export const addstock = (name,category,image,price,countInStock,
  brand,description) => async (dispatch) => {
  dispatch({ type: STOCK_ADD_REQUEST });
  try {
    const { data } = await Axios.post('/api/products/addstock', {
      name,
      category,
      image,
      price,
      countInStock,
      brand,
      description
    });
    dispatch({ type: STOCK_ADD_SUCCESS, payload: data });
    //localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: STOCK_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//export const listProducts = () => async (dispatch) => {
//  dispatch({
//    type: PRODUCT_LIST_REQUEST,
//  });
//  try {
//    const { data } = await Axios.get('/api/products');
//    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
//  } catch (error) {
//    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
//  }
//};

