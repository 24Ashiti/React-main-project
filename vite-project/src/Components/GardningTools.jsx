import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GardningTools = () => {
  return (
    <div>
      <div className='relative mb-[50px]'>

        <div className="bg-[url('https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/full-bg-img-scaled.webp')] relative bg-cover h-[430px] bg-repeat-x bg-start max-lg:brightness-50">
          <Container>
            <div className='absolute right-0 bottom-0 top-0 mx-auto max-w-[450px] my-[110px]'>
              <div>
                <div className='max-md:block'>
                  <h1 className='text-[40px] mb-[20px] text-white max-md:text-[30px] max-md:flex justify-center '>
                    <div className=''>
                      Find your perfect<br />
                      <span className='text-wrap flex'>gardening tools on best price</span>
                    </div>
                  </h1>
                  <Link to='/ShopNow'>
                    <a href=''>
                      <button className='py-[12px] px-[40px] border-1 border-black font-semibold  bg-white hover:bg-black hover:text-white hover:-translate-y-[20px] duration-300 easy-in-out'>
                        ShopNow
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default GardningTools
