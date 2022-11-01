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
       <button className="flex  text-white text-center bg-indigo-500 border-0 py-6 px-10 ml-8  focus:outline-none w-40 hover:bg-indigo-600 rounded">Explore events</button>

      </Link>   
    </div>
  </div>
</section>


  )
}

export default EventItem