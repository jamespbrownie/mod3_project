import { Outlet, Link } from 'react-router-dom'
import TripCard from "./TripCard"

function AllTrips ({trips}) {
    return (
        <div id="tripcard">
        {/* <p>{trips}</p>
        <p> hello? </p> */}
        {trips.map((trip,index) => {
            return (
                <Link to={`/${trip.id}`} key={trip.id} >
                <TripCard key={index} trip={trip} />
                </Link>
            )
        })}
        <Outlet/>
        </div>
    )
}

export default AllTrips