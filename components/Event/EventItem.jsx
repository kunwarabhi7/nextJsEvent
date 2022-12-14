import React from 'react'
import {AiTwotoneCalendar} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io5'
import Link from 'next/link' 

const EventItem = (props) => {
    const {title,image,id,date,location} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      const formattedAddress = location.replace(', ', '\n');
      const exploreLink = `/events/${id}`;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{title}</h1>
        
        <div className="flex  mb-6  py-2">
        <AiTwotoneCalendar size={25} className='text-green-500 '  />
          <span className="ml-4 text-gray-500">{humanReadableDate}</span>
        </div>
        <div className="flex">
          <IoLocationOutline  size={25} className='text-red-500 ' />
          <span className="title-font font-medium text-2xl text-gray-900">{formattedAddress}</span>
          
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-64  h-44 object-cover object-center rounded" src={image} />
    </div>
    <div>

      <Link href={exploreLink}>
       {/* <button className="flex  text-white text-center bg-indigo-500 border-0 py-6 px-10 ml-8  focus:outline-none w-40 hover:bg-indigo-600 rounded">Explore events</button> */}
       <button  className="relative ml-4 pt-4 inline-block text-lg group">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">Explore events</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button>
      </Link>   
    </div>
  </div>
</section>


  )
}

export default EventItem