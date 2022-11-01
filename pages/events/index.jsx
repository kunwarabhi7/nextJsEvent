import React from 'react'
import EventList from '../../components/Event/EventList'
import { getAllEvents } from '../../dummy_data'

const AllEventsPage = () => {
  const events = getAllEvents()

  return (
<EventList items={events} />      
  )
}

export default AllEventsPage