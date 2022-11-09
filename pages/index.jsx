import {getFeaturedEvents} from '../helper/helper'
import EventList from '../components/Event/EventList'

const index = (props) => {
 
  return (
    <div>
<EventList items={props.event} />      
    </div>
  )
}

export default index;

export async function getStaticProps() {
  const featuredEvent = await getFeaturedEvents();
  return {
    props: {
      event : featuredEvent,
    }, // will be passed to the page component as props
  }
}