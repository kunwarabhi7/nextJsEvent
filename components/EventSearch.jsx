import React from 'react'
import { useRef } from 'react'
import { useRouter } from 'next/router';

const EventSearch = () => {
const router = useRouter()
 const YearRef= useRef();
 const MonthRef= useRef();

 const onSearch =(year,month) => {
    const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    
     }

 
 const searchHandler = (e) => {
        e.preventDefault()
 const selectedYear = YearRef.current.value;
 const selectedMonth = MonthRef.current.value;

 

       onSearch(selectedYear, selectedMonth)
    }


  return (
    <form onSubmit={searchHandler}>
        <div className='flex item-center justify-center '>
            
<div className='pr-4 pt-4 '>

        <label htmlFor="year">Year</label>
        <select id="year" ref={YearRef}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
        </select>
</div>
<div className='pr-4 pt-4 '>
        <label htmlFor="month">Month</label>
        <select id="month" ref={MonthRef}>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
        </select>
        </div>
<button  className="relative ml-4 pt-4 inline-block text-lg group">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">Search Events</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button>
</div>

    </form>
  )
}

export default EventSearch