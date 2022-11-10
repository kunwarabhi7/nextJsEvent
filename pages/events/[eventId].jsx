import {getEventById,getFeaturedEvents } from '../../helper/helper'

const EventDetailPage = (props) => {

  const event = props.event

  if(!event){
    return(
      <p className='text-center text-7xl text-red-500 '>Loading...</p>
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





export async function getStaticProps(contex) {
  const eventId = contex.params.eventId;
  const selectedEvents = await getEventById(eventId);
  return {
    props: {
      event : selectedEvents,
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map(event=> ({params: {eventId:event.id}  }))

  return {
    paths: paths,
    fallback:true,
  }
}

export default EventDetailPage