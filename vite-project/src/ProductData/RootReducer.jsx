import { combineReducers } from '@reduxjs/toolkit';
import reducer from './Redux/Reducer';
import productReducer from './ProdutRedux/ProductReducer';
import Wishlist_Reducer from './Redux/Wishlist_Reducer';

const RootReducer = combineReducers({
   reducer,
   Wishlist_Reducer,
   productReducer
})

export default RootReducer