import React from 'react'
import {useRouter} from 'next/router'
import { getEventById } from '../../dummy_data'

const EventDetailPage = () => {
  const router= useRouter()
  const  eventId= router.query.eventId
  const event = getEventById(eventId)  

  if(!event){
    return(
      <p>No Page Found!</p>
    )
  }


  return (
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded w-24 h-40" alt="hero" src={event.image}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{event.title}</h1>
      <p className="mb-8 leading-relaxed">{event.description}</p>
        <h1>{event.location}</h1> <br />
  <h1>{event.date}</h1>
      
    </div>
  </div>
</section>
  )
}

export default EventDetailPage