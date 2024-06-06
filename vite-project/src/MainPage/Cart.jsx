import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { removeTocart, emptycart } from '../ProductData/Redux/Action'
import { increment } from '../ProductData/Redux/Action'
import { decrement } from '../ProductData/Redux/Action'
import { NavLink } from 'react-router-dom'

const Cart = () => {


  const dispatch = useDispatch();

  const CartData = useSelector((state) => state.reducer)

  const totalamount = CartData.reduce((total, item) => total + (item.price * item.quntity), 0);

  const finalamount = totalamount


  return (
    <div className=' bg-gradient-to-1 from-[#e8f3fc] to-[#f8fafc]'>
      <Container className='py-[50px]'>
        {CartData.length === 0 && (


          <div className='py-[150px]'>
            <div className='mb-[50px] shadow-xl'>
              <p className='py-[18px] bg-white text-[18px] px-[25px]'>
                Your Cart is Currently empty.
              </p>
            </div>
            <NavLink to='/ShopNow'>
              <button className='hover:-translate-y-[10px] duration-300 ease-in-out'>
                <a href="" className='text-white py-[13px] px-[30px] bg-black text-[17px] '>Return To Shop
                </a>
              </button>
            </NavLink>
          </div>
        )}
        
        <div className='flex container mx-auto justify-between max-xl:block'>
          <div className='w-[65%] text-center bg-white m-auto max-xl:w-[100%] p-[20px]'>
            <div>
            <button onClick={() => dispatch(emptycart())} className="hover:-translate-y-[10px] duration-300 ease-in-out p-3">
              <a href=""
                className="text-white py-[13px] px-[30px] bg-black text-[17px] " >
                Empty Cart
              </a>
            </button>

              <div className='flex row justify-between pb-[20px] pt-[30px] px-[25px]'>
                <div className="col-6 font-normal">Products</div>
                <div className="col-2 font-normal">Price</div>
                <div className="col-2 font-normal">Quantity</div>
                <div className="col-2 font-normal">Total</div>
              </div>
            </div>
            <hr />
            {CartData.flat().map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex justify-betweenpt-[30px] items-center py-[30px] ">
                    <div className="flex col-6 items-center pl-[20px]">
                      <button onClick={() => dispatch(removeTocart(item.id))} className='btn btn-denger btn-sm'>Remove</button>
                      <img
                        className="h-32  w-32 col-6"
                        src={item.img}
                        alt="" />
                      <div className="col-6">{item.name}</div>
                    </div>
                    <div className="col-2">{item.price}</div>
                    <div className="col-2  border-1 border-black py-[10px] items-center">
                      <button onClick={() => dispatch(decrement(item.id))}>-</button>
                      <span>{item.quntity}</span>
                      <button onClick={() => dispatch(increment(item.id))}>+</button>
                    </div>
                    <div className="col-2">{item.price * item.quntity}</div>
                  </div>
                  <hr />
                </div>
              );
            })}
            <div className='flex justify-start py-[15px]'>
              <input type='numver' className='border-1 border-[#d3ced2] px-[10px]' placeholder='coupan code' />
              <button className='bg-black py-[11px] px-[33px] border-black border-1 text-white chekout ' type='submit'>Apply Coupon</button>
            </div>
          </div>

          <div className='w-[30%] bg-white max-xl:w-[100%] max-xl:mt-[30px]'>
            <div className='p-[25px]'>
              <h4 className='my-[8px]'>Cart Total is</h4>
              <hr />
              <div className='flex justify-between mt-[30px] mb-[20px]'>
                <span>Subtotal</span>
                <span>${totalamount}</span>
              </div>
              <hr />
              <div className='leading-10 my-[15px]'>
                <h1>Shiping</h1>
                <div className="flex justify-between">
                  <span>Flat Rate:</span>
                  <span>$10.00</span>
                </div>
                <div>
                  Shipping to <span className="font-bold">CA</span>
                </div>
                <h4>Change address </h4>
              </div>
              <hr />
              <div className="flex justify-between my-[25px]">
                <span>Total:</span>
                <span>{finalamount}</span>
              </div>
              <div className="w-full py-[15px] text-center border-2 border-black hover:-translate-y-[15px] duration-300 ease-in-out bg-black text-white checkout">
                <button>Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Cart
