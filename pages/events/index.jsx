import React from 'react'
import EventList from '../../components/Event/EventList'
import EventSearch from '../../components/EventSearch'
import { getAllEvents } from '../../dummy_data'

const AllEventsPage = () => {
  const events = getAllEvents()

  return (
    <>
    <EventSearch />
<EventList items={events} />      
    </>
  )
}

export default AllEventsPage