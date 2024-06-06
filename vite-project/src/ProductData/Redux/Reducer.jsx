import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART ,INCREMENT,DECREMENT} from './Constant'

const getCartDatafromlocalstorage = () => {
   const cartData = localStorage.getItem("cart")
   return cartData ? JSON.parse(cartData) : [];
}
const reducer = (state = getCartDatafromlocalstorage(), action) => {
   switch (action.type) {
      case ADD_TO_CART:
         // console.warn('add to creatreducer called', action);   
         // const Updatecartadd = [action.data , ...state]
         // localStorage.setItem("cart" , JSON.stringify(Updatecartadd))
         // return Updatecartadd

         const existingproduct = state.findIndex(item => item.id === action.data.id)
         let updatecartData;
         console.log(updatecartData);
         if (existingproduct >= 0) {
            updatecartData = state.map((item) => item.id === action.data.id ? { ...item, quntity: item.quntity += 1 } : item)
         }
         else {
            updatecartData = [{ ...action.data, quntity: 1 }, ...state]
         }
         localStorage.setItem('cart', JSON.stringify(updatecartData))
         return updatecartData
         
      case REMOVE_TO_CART:
         const UpdatecartRemove = state.filter( item => item.id !== action.data)
         localStorage.setItem("cart", JSON.stringify(UpdatecartRemove))
         return UpdatecartRemove;

         case INCREMENT:
            const updatecartIncrement = state.map (item => item.id === action.data ? {... item , quntity:item.quntity +1 }:item

            );
            localStorage.setItem('cart' , JSON.stringify(updatecartIncrement));
            return updatecartIncrement;

          case DECREMENT:
          const updatecartDecrement = state.map(item => item.id === action.data && item.quntity > 1 ? {
            ...item, quntity: item.quntity -1 }:item

         );

         localStorage.setItem('cart' ,JSON.stringify(updatecartDecrement))
         return updatecartDecrement
      
      case EMPTY_CART:
         localStorage.removeItem("cart")
         return []
      default: return state
   }

   
}

export default reducer