import React from 'react'
import EventList from '../../components/Event/EventList'
import EventSearch from '../../components/EventSearch'
import { getAllEvents } from '../../helper/helper'

const AllEventsPage = (props) => {
  const {events} = props ;

  return (
    <>
    <EventSearch />
<EventList items={events} />      
    </>
  )
}

export default AllEventsPage

export async function getStaticProps() {
  const events = await getAllEvents ()

  return { 
    props : {
      events:events,
    },
    revalidate : 60,

  }
}