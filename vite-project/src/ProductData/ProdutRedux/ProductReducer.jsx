import { PRODUCT_LIST,PRODUCT_SET } from "../Redux/Constant";

 const productReducer = (data = [],action) =>{
   switch (action.type){
    case PRODUCT_LIST:
        console.warn("productlist called",action);
        localStorage.setItem('product list',JSON.stringify(action.data))
        return[...action.data]

        case PRODUCT_SET:
            console.warn("producr set called",action);
            localStorage.setItem("productset",JSON.stringify(action.data))
            return[...action.data]
            default:return data
   }
 }

 export default productReducer