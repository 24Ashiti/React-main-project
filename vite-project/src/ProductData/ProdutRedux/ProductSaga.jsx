import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_SET } from "../Redux/Constant";
import { PRODUCT_LIST } from "../Redux/Constant";

function* getproduct(){
    let data = yield fetch('http://localhost:3000/Product')
    data = yield data.json()
    console.warn(data);
    yield put({type:PRODUCT_SET,data})
}

function* productsaga(){
    yield takeEvery(PRODUCT_LIST,getproduct)
}

export default productsaga