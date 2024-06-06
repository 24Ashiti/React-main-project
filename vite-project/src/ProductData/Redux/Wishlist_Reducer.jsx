import { ADD_WISHLIST, REMOVE_WISHLIST, EMPTY_WISHLIST ,INCREMENT , DECREMENT } from './Constant'

const getwishlistDataFromLocalstorage = () => {
  const wishlist = localStorage.getItem('wishlist');
  return wishlist ? JSON.parse(wishlist) : [];
};

const Wishlist_Reducer = (state = getwishlistDataFromLocalstorage(), action) => {
  switch (action.type) {
    case ADD_WISHLIST:
      // console.warn('add wishlist called',action);
      // const updatewishlistadd = [action.data, ...state]
      // localStorage.setItem('wishlist',JSON.stringify(updatewishlistadd));
      // return updatewishlistadd;

      const existingproduct = state.findIndex(item => item.id === action.data.id)
      let updatewishllistData;
      console.log(updatewishllistData);

      if (existingproduct >= 0) {
        updatewishllistData = state.map((item) => item.id === action.data.id ? {

          ...item, quntity: item.quntity += 1
        } : item)
      }
      else {
        updatewishllistData = [{ ...action.data, quntity: 1 }, ...state]
      }
      localStorage.setItem('wishlist', JSON.stringify(updatewishllistData))
      return updatewishllistData
      
    case REMOVE_WISHLIST:
      const updatewishllistRemove = state.filter(item => item.id !== action.data)
      localStorage.setItem('wishlist', JSON.stringify(updatewishllistRemove))
      return updatewishllistRemove;


    case INCREMENT:
      const updatecartIncrement = state.map(item => item.id === action.data ? { ...item, quntity: item.quntity + 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatecartIncrement));
      return updatecartIncrement;

    case DECREMENT:
      const updatecartDecrement = state.map(item => item.id === action.data && item.quntity > 1 ? {
        ...item, quntity: item.quntity - 1
      } : item

      );

      localStorage.setItem('cart', JSON.stringify(updatecartDecrement))
      return updatecartDecrement


    case EMPTY_WISHLIST:
      localStorage.removeItem('wishlist')
      return []
    default: return state;

  }

}


export default Wishlist_Reducer
