import {getFeaturedEvents} from '../helper/helper'
import EventList from '../components/Event/EventList'
import Head from 'next/head'

const index = (props) => {
 
  return (
    <div>
      <Head>
        <title>Events Page</title>
      </Head>
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