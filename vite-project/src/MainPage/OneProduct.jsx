import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import heart from'../assets/heart.svg'
import Cart from'../assets/Cart.svg'
import Eyes from'../assets/Eyes.svg'


const Product1 = () => {
  return (
    <div className=''>
      <div className='bg-[#fcf7ef] '>
        <div className='pt-[45px] pb-[40px] px-[15px]'>
          <Container>
            <h1 className='text-[29px] max-md:text-[25px]'>PRODUCT STYLE ONE</h1>
          </Container>
        </div>
      </div>
      <section className='max-md:block max-md:w-[100%] max-md:p-0 my-[80px] container '>
        <div className='flex flex-wrap m-auto col-xs-block'>

          <div className='col-6 col-lg-4 relative border-[20px] border-white Hover:shadow-2xl shadow-gray-700'>
            <div className='absolute right-5  p-3 z-10 max-md:hidden'>
              <span className='text-white bg-black px-2 '>-33%</span>
            </div>
            <div className='p-[10%] absolute left-2 shop-icon z-10'>
              <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                <a href="" className=''>
                  <img src={heart} alt="" height={20} width={20}/>
              
                </a>
              </div>
              <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                <a href="">
                  <img src={Eyes} alt="" height={20} width={20}/>
                </a>
              </div>
              <div className='p-[7px] flex justify-center bg-white rounded-full icon-1'>
                <a href="">
                  <img src={Cart} alt="" height={12} width={16}/>
                </a>
              </div>
            </div>
            <div className='overflow-hidden'>
            <img decoding='async' alt='custom-image' className="primary-img" src='https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp' />
            </div>
            <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]'>
              <h5>Bird's nest leslie</h5>
              <p className='text-muted '>
                <del className='pr-[8px]'>$45</del>
                <span>$30</span>
              </p>
            </div>
          </div> 
          <div className='col-6 col-lg-4 relative border-[20px] border-white'>
            <div className='absolute right-5  p-3 z-1 max-md:hidden'>
              <span className='text-white bg-black px-2'>-20%</span>
            </div>
            <div className='p-[10%] absolute left-2 shop-icon z-10'>
              <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                <a href="" className=''>
                <img src={heart} alt="" height={20} width={20}/>
              
                </a>
              </div>
              <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                <a href="">
                <img src={Eyes} alt="" height={20} width={20}/>

                </a>
              </div>
              <div className='p-[7px] flex justify-center bg-white rounded-full icon-1'>
                <a href="">
                <img src={Cart} alt="" height={12} width={16}/>
                </a>
              </div>
            </div>
            <div className='overflow-hidden'>
            <img decoding='async' alt='custom-image' className="primary-img" src='https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Haworthia.webp' />
            </div>
            <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]'>
              <h5>Monstera plant</h5>
              <p className='text-muted '>
                <del className='pr-[8px]'>$60</del>
                <span>$48</span>
              </p>
            </div>
          </div>
          <div className='col-6 col-lg-4 relative border-[20px] border-white'>
            <div className='absolute right-5  p-3 z-10 max-md:hidden'>
              <span className='text-white bg-black px-2 '>-20%</span>
            </div>
            <div className='p-[10%] absolute left-2 shop-icon z-10'>
              <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                <a href="" className=''>
                  <img src={heart} alt="" height={20} width={20}/>
                </a>
              </div>
              <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                <a href="">
                <img src={Eyes} alt="" height={20} width={20}/>
                </a>
              </div>
              <div className='p-[7px] flex justify-center bg-white rounded-full icon-1'>
                <a href="">
                <img src={Cart} alt="" height={12} width={16}/>
                </a>
              </div>
            </div>
            <div className='overflow-hidden'>
            <img decoding='async' alt='custom-image' className="primary-img" src='https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Birds-nest-fern-01.webp' />
            </div>
            <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]'>
              <h5>Haworthia</h5>
              <p className='text-muted '>
                <del className='pr-[8px]'>$87</del>
                <span>$70</span>
              </p>
            </div>
          </div>
          <div className='col-6 col-lg-4 relative border-[20px] border-white'>
            <div className='absolute right-5  p-3 z-10 max-md:hidden'>
              <span className='text-white bg-black px-2 '>-20%</span>
            </div>
            <div className='p-[10%] absolute left-2 shop-icon z-10'>
              <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                <a href="" className=''>
                  <img src={heart} alt="" height={20} width={20}/>
                </a>
              </div>
              <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                <a href="">
                <img src={Eyes} alt="" height={20} width={20}/>
                </a>
              </div>
              <div className='p-[7px] flex justify-center bg-white rounded-full icon-1'>
                <a href="">
                <img src={Cart} alt="" height={12} width={16}/>
                </a>
              </div>
            </div>
            <div className='overflow-hidden'>
            <img decoding='async' alt='custom-image' className="primary-img" src='https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/peace-lily-02.webp' />
            </div>
            <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]'>
              <h5>Haworthia</h5>
              <p className='text-muted '>
                <del className='pr-[8px]'>$87</del>
                <span>$70</span>
              </p>
            </div>
          </div>
          <div className='col-6 col-lg-4 relative border-[20px] border-white'>
            <div className='absolute right-5  p-3 z-10 max-md:hidden'>
              <span className='text-white bg-black px-2 '>-20%</span>
            </div>
            <div className='p-[10%] absolute left-2 shop-icon z-10'>
              <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                <a href="" className=''>
                  <img src={heart} alt="" height={20} width={20}/>
                </a>
              </div>
              <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                <a href="">
                <img src={Eyes} alt="" height={20} width={20}/>
                </a>
              </div>
              <div className='p-[7px] flex justify-center bg-white rounded-full icon-1'>
                <a href="">
                <img src={Cart} alt="" height={12} width={16}/>
                </a>
              </div>
            </div>
            <div className='overflow-hidden'>
            <img decoding='async' alt='custom-image' className="primary-img" src='https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/barrel-cactus-01.webp' />
            </div>
            <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]'>
              <h5>Haworthia</h5>
              <p className='text-muted '>
                <del className='pr-[8px]'>$87</del>
                <span>$70</span>
              </p>
            </div>
          </div>
          <div className='col-6 col-lg-4 relative border-[20px] border-white'>
            <div className='absolute right-5  p-3 z-10 max-md:hidden'>
              <span className='text-white bg-black px-2 '>-20%</span>
            </div>
            <div className='p-[10%] absolute left-2 shop-icon z-10'>
              <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                <a href="" className=''>
                  <img src={heart} alt="" height={20} width={20}/>
                </a>
              </div>
              <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                <a href="">
                <img src={Eyes} alt="" height={20} width={20}/>                </a>
              </div>
              <div className='p-[7px] flex justify-center bg-white rounded-full icon-1'>
                <a href="">
                <img src={Cart} alt="" height={12} width={16}/>
                </a>
              </div>
            </div>
            <div className='overflow-hidden'>
            <img decoding='async' alt='custom-image' className="primary-img" src='https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Snake-Plant.webp' />
            </div>
            <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]'>
              <h5>Haworthia</h5>
              <p className='text-muted '>
                <del className='pr-[8px]'>$87</del>
                <span>$70</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product1