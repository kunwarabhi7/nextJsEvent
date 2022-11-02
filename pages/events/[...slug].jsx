import {useRouter} from 'next/router'
import {  getFilteredEvents } from '../../dummy_data';

const FilteredEventPage = () => {
  const router = useRouter();
  const  filterData = router.query.slug;
  if(!filterData) {
    return <p className='text-7xl m-auto text-center'>Loading....</p>
  }
  const filterYear = filterData[0];
  const filterMonth = filterData[1];
  const numericYear = +filterYear;
  const numericMonth = +filterMonth;

  if(isNaN(numericYear) || isNaN(numericMonth) || numericYear>2030 || numericYear<2019 ||numericMonth<1 || numericMonth>12 ) {
    return <p>Please Enter a valid entry</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numericYear,
    month: numericMonth
  })

  if(!filteredEvents || filteredEvents.length ===0){
    return <p>No event found</p>

  }
  

  return (
    <div>Filtered Event Page</div>
  )
}

export default FilteredEventPage