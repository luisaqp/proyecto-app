import { STOCK_ADD_FAIL, STOCK_ADD_REQUEST, STOCK_ADD_SUCCESS } from "../constants/stockConstants";

  export const addingStockReducer = (state = {}, action) => {
    switch (action.type) {
        case STOCK_ADD_REQUEST:
          return { loading: true };
        case STOCK_ADD_SUCCESS:
            return { loading: false, product: action.payload };;
        case STOCK_ADD_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
  };


  
  
