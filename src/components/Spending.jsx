import React from 'react'
import "../assets/css/style.css"
import cashdollar from "../assets/img/cashdollar.png"
import { FaArrowUp } from "react-icons/fa";

const Spending = () => {
  const numberOptions= [
    ["2021/04/08 - 2021/04/10"]
  ]
  const textOptions = [
    ["YTD"]
  ]
  
  return (
    <>
      <section className='border-b border-[#E5E6E6] '>
        <div className=' container max-w-7xl xl:mx-auto flex flex-col gap-y-6 py-4 px-4'>
          <div className='flex sm:justify-between sm:flex-row flex-col gap-y-3'>
            {/* <div className='flex'></div> */}
            <span className='flex gap-x-2 items-center'>
              <figure className=' bg-[#E6F4FA] p-2'>
                <img src={cashdollar} alt="" className='' />
              </figure>
              <h4 className='bargraph__heading__logo'>Total Spending</h4>
            </span>
            <span className='flex gap-x-4'>
              <select className=' bargraph__upper-paragraph select__option-b-p'>
                <option value="2021/04/08 - 2021/04/10">{numberOptions}</option>
              </select>
              <select className='bargraph__upper-paragraph select__option-b-p'>
                <option value="2021/04/08 - 2021/04/10">{textOptions}</option>
              </select>
            </span>
          </div>
          <div className='flex sm:justify-between sm:flex-row flex-col gap-y-3'>
          <div className='flex'>
            <div className='flex flex-col border-r border-[#E5E6E6]  pr-6'>
              <p className='bargraph__upper-paragraph'>Till Now</p>
              <span className='flex gap-x-1 items-baseline'>
                <p className='bargraph__heading__logo'>$</p>
                <p className='bargraph__heading__logo sm:text-5xl sm:leading-[56px]'>8.5</p>
                <p className='bargraph__heading__logo'>M</p>
              </span>
            </div>
            <div className='flex flex-col border-r border-[#E5E6E6] px-6 text-[#0092CF]'>
              <p className='bargraph__upper-paragraph'>This Year</p>
              <span className='flex gap-x-1 items-baseline'>
                <p className='bargraph__heading__logo'>$</p>
                <p className='bargraph__heading__logo sm:text-5xl sm:leading-[56px]'>1.2</p>
                <p className='bargraph__heading__logo'>M</p>
              </span>
            </div>
            <div className='flex flex-col pl-6 text-[#C8A200]'>
              <p className='bargraph__upper-paragraph'>Last Year</p>
              <span className='flex gap-x-1 items-baseline'>
                <p className='bargraph__heading__logo'>$</p>
                <p className='bargraph__heading__logo sm:text-5xl sm:leading-[56px]'>780.4</p>
                <p className='bargraph__heading__logo'>K</p>
              </span>
            </div>
            </div>
            <div className='flex gap-x-6 md:pt-12 items-end'>
              <span className='flex justify-center items-center gap-x-1 bg-[#CFEED5] pl-1 pr-2 py-1 bargraph__upper-paragraph'><FaArrowUp className='text-white'/>
                8.5%</span> 
              <span className='md:pt-2'>
              <p className='bargraph__upper-paragraph'>vs last year</p>
              </span>
            </div>
            </div>
        </div>
      </section>
      
    </>
  )
}

export default Spending