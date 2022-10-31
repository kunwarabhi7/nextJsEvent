import {getFeaturedEvents} from '../dummy_data'
import EventList from '../components/Event/EventList'

const index = () => {
  const featuredEvent = getFeaturedEvents()
  return (
    <div>
<EventList items={featuredEvent} />      
    </div>
  )
}

export default index