import React from 'react'
import visa from '../assets/visa.svg'
import webmoney from '../assets/webmoney.svg'
import jcb from '../assets/jcb.svg'
import discover from '../assets/discover.svg'
import exprees from '../assets/exprees.svg'
import meastro from '../assets/meastro.svg'
const Contactfooter = () => {
  return (
    <div>
      <footer className='bg-[#efefef] text-black-200'>
        <div className='mx-auto py-14 px-10 '>
          <div className='grid md:grid-cols-12 grid-cols-1 gap-5'>
            <div className='lg:col-span-4 col-span-12 -m-6'>
              <div className='h-12'>
                <img alt="logo" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/emart-011.webp" width="140" height="31" />
              </div>
              <p> Molestie vitae massa felis, aliquam lectus at. Ultricies et, quis sit fermentum.</p>
            </div>
            <div className='bg-[#c7c8cb] w-[0.5px] -mt-[4px] -mb-[1px] ml-10 max-xl:hidden]'></div>
            <div className='lg:col-span-2 md:col-span-4 col-span-12 '>
              <h5 className='tracking-wind text-black-100 font-bold'>Quick Link</h5>
              <ul className='list-none mt-6 space-y-2'>
                <li className='text-muted py-[4px] text-[17px] animated-text'> About </li>
                <li className='text-muted py-[4px] text-[17px] animated-text'> Product </li>
                <li className='text-muted py-[4px] text-[17px] animated-text'> Responsibility</li>
                <li className='text-muted py-[4px] text-[17px] animated-text'> Career</li>
              </ul>
            </div>

            <div className='lg:col-span-2 md:col-span-4 col-span-12'>
              <h5 className='tracking-wind text-black-100 font-bold'>Services</h5>
              <ul className='list-none mt-6 space-y-2'>
                <li className='text-muted py-[4px] text-[17px] animated-text'> My Account </li>
                <li className='text-muted py-[5px] text-[17px] animated-text'> Chekout Page</li>
                <li className='text-muted py-[4px] text-[17px] animated-text'>Help Center</li>
                <li className='text-muted py-[4px] text-[17px] animated-text'>Terms & Condition</li>
              </ul>
            </div>

            <div className='lg:col-span-2 md:col-span-4 col-span-12'>
              <h5 className='tracking-wind text-black-100 font-bold'>More</h5>
              <ul className='list-none mt-6 space-y-2'>
                <li className='text-muted py-[4px] text-[17px] animated-text'> Gift Card</li>
                <li className='text-muted py-[4px] text-[17px] animated-text'> Lookbook</li>
                <li className='text-muted py-[4px] text-[17px] animated-text'>Rewards Program</li>
                <li className='text-muted py-[4px] text-[17px] animated-text'> Career</li>
              </ul>
            </div>
          </div>
        </div>
    
          <div className='h-[1px] bg-[#c7c8cb]'></div>
      <div className='container py-3 flex justify-between max-md:block items-center'>
        <div>
          <ul className='flex'>
            <li className='h-[35px] w-[50px] pe-3'>
              <img src={visa} alt="" />
            </li>
            <li className='h-[35px] w-[50px] pe-3'>
              <img src={webmoney} alt="" />
            </li>
            <li className='h-[35px] w-[50px] pe-3'>
              <img src={meastro} alt="" />
            </li>
            <li className='h-[35px] w-[50px] pe-3'>
              <img src={jcb} alt="" />
            </li>
            <li className='h-[35px] w-[50px] pe-3'>
              <img src={discover} alt="" />
            </li>
            <li className='h-[35px] w-[50px] '>
              <img src={exprees} alt="" />
            </li>
          </ul>
        </div>
        <div className='flex  max-sm:py-1 max-md:justify-start max-md:mt-[15px]'>
          <div className='flex'>
            <span className="text-base text-gray-500">Designed by :<span className="font-bold">Wpignite</span></span>
          </div>
        </div>
      </div>
          

      </footer>
    </div>
  )
}

export default Contactfooter
