import React from 'react'
import { Container } from 'react-bootstrap'


const FreeShiping = () => {
  return (
    <div className='bg-[#e7e2dd]'>
      <Container>
        <section className='py-[50px]'>
          <div className='flex row max-md:block'>
            <div className='col-xl-3 flex items-center justify-start col-md-6 max-md:pb-7 max-md:block'>
              <div className='px-4 max-md:pb-[20px] max-md:flex  max-md:justify-center'>
                <img decoding="async" src="https://emart.wpthemedemos.com/women-fahion/wp-content/uploads/sites/5/2022/11/Free-shipping-2-10.svg" title="" alt="" loading="lazy" />
              </div>
              <div className='max-md:block'>
                <h4 className='font-semibold mb-2 text-[18px] max-md:justify-center max-md:flex'>Free FreeShiping</h4>
                <p className='text-muted max-md:flex max-md:justify-center'>On Order over $1499</p>
              </div>
            </div>
            <div className='col-xl-3 flex items-center justify-start col-md-6 max-md:pb-7 max-md:block'>
              <div className='px-4 max-md:pb-[20px] max-md:flex  max-md:justify-center'>
                <img src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Quick-payment-svg-10.svg" alt="Quick-payment-svg-10" loading="lazy" />
              </div>
              <div className='max-md:block'>
                <h4 className='font-semibold mb-2 text-[18px] max-md:justify-center max-md:flex'>Quick payment</h4>
                <p className='text-muted max-md:flex max-md:justify-center'>Online quick Payment</p>
              </div>
            </div>
            <div className='col-xl-3 flex items-center justify-start col-md-6 max-md:pb-7 max-md:block'>
              <div className='px-4 max-md:pb-[20px] max-md:flex  max-md:justify-center'>
                <img decoding="async" src="https://emart.wpthemedemos.com/women-fahion/wp-content/uploads/sites/5/2022/11/Easy-return-1-10.svg" title="" alt="" loading="lazy" />
              </div>
              <div className='max-md:block'>
                <h4 className='font-semibold mb-2 text-[18px] max-md:justify-center max-md:flex'>Easy return</h4>
                <p className='text-muted max-md:flex max-md:justify-center'>Return within 24 hours</p>
              </div>
            </div>
            <div className='col-xl-3 flex items-center justify-start col-md-6 max-md:pb-7 max-md:block'>
              <div className='px-4 max-md:pb-[20px] max-md:flex  max-md:justify-center'>
                <img decoding="async" src="https://emart.wpthemedemos.com/women-fahion/wp-content/uploads/sites/5/2022/11/Support-1-15.svg" title="" alt="" loading="lazy" />
              </div>
              <div className='max-md:block'>
                <h4 className='font-semibold mb-2 text-[18px] max-md:justify-center max-md:flex'>24/7 Support</h4>
                <p className='text-muted max-md:flex max-md:justify-center'>Customer support</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default FreeShiping
