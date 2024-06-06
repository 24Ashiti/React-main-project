import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AllCompo from'./MainPage/AllCompo'
import OneProduct from'./MainPage/OneProduct'
import ShopNow from'./MainPage/ShopNow'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import FourProduct from './MainPage/FourProduct'   
import Wishlist from './MainPage/Wishlist'
import Cart from './MainPage/Cart'
import BlogThree from './MainPage/BlogThree'
import Contact2 from './MainPage/Contact2'
import MainNav from'./Components/MainNav'
import CheckOut from './MainPage/CheckOut'
import Login from './MainPage/Login'




function App() {
 
 

  return (
    <>
    <Navbar/>
    <Login/>
       <BrowserRouter>
    <MainNav/>
        <Routes> 
          <Route path='/' element={<AllCompo/>}/>
          <Route path='/StyleOne' element={<OneProduct/>}/>
          <Route path='/StyleFour' element={<FourProduct/>}/>
           <Route path='/WishList' element={<Wishlist/>}/>
          <Route path='/Cart' element={<Cart/>}/>
           <Route path='/ShopNow' element={<ShopNow/>}/>
          {/* </Route> */}
           <Route path='/BlogThree' element={<BlogThree/>}/>
           <Route path='/Contact' element={<Contact2/>}/>
           <Route path='/ChekOut' element={<CheckOut/>}/>
        
        </Routes>
        </BrowserRouter>      
       <Footer/>   

           
    </>
  )
}

export default App
