import{ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART, ADD_WISHLIST, REMOVE_WISHLIST, EMPTY_WISHLIST, INCREMENT, DECREMENT} from'./Constant'

  export const addTocart =(data) =>{
    console.warn("add to cart called",data);
    return{
        type:ADD_TO_CART,
        data
    }
  }

  export const removeTocart =(data) =>{
    console.warn("remove to cart called",data);
    return{
        type:REMOVE_TO_CART,
        data
    }
  } 

  export const emptycart =() =>{
    console.warn("empty cart called");
    return{
        type:EMPTY_CART,
       
    }
  } 

  export const addwishlist =(data) =>{
    console.warn('add wishlist called',data);
    return{
      type:ADD_WISHLIST,
      data
    }
  }

  export const removewishlist = (data) =>{
    console.warn('remove to wishlist called',data);
    return{
      type:REMOVE_WISHLIST,
      data
    }
  }

  export const emptywishlist = (data) =>{
    console.warn('empty wishlist called',data);
    return{
      type:EMPTY_WISHLIST,
    }
  }

  export const increment = (data) => {
    return{
      type:INCREMENT,
      data
    }

  }

   export const decrement = (data) => {
    return{
      type:DECREMENT,
      data
    }
   }