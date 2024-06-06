import RootReducer from "./RootReducer";
import { configureStore } from "@reduxjs/toolkit";
import productsaga from "./ProdutRedux/ProductSaga";
import createsagaMiddeleware from'redux-saga'

const sagaMiddlewere = createsagaMiddeleware()

const store = configureStore({
reducer:RootReducer,
Wishlist_Reducer:RootReducer,

middleware:() => [sagaMiddlewere]
})
sagaMiddlewere.run(productsaga)

export default store 