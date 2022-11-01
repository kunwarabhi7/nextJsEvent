import React from 'react'
import Image from 'next/image'
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
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Size</span>
          <span className="ml-auto text-gray-900">Medium</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">{humanReadableDate}</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">{formattedAddress}</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-96 lg:h-auto h-64 object-cover object-center rounded" src={image} />
    </div>
  </div>
</section>


  )
}

export default EventItem