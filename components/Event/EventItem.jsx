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
    <div className='flex flex-col item-center  p-40 justify-center'>
      <div className='w-96 h-64'>

         <Image src={image} width='240' height='240' />
      </div>
        <div>
            <div>
                <h2>{title}</h2>
                <time>{humanReadableDate}</time>
                <address>{formattedAddress}</address>
            </div>
            <Link href={exploreLink}>
              <button className='bg-blue-500 p-2 rounded-full text-white'>Explore Event</button>
            </Link>
        </div>
        
    </div>
  )
}

export default EventItem