import { Outlet, Link } from 'react-router-dom'
import TripCard from "./TripCard"

function AllTrips ({trips}) {
    return (
        <div id="tripcard">
        {/* <p>{trips}</p>
        <p> hello? </p> */}
        {trips.map((trip) => {
            return (
                <Link to={`/${trip.id}`} key={trip.id} >
                <TripCard trip={trip} />
                </Link>
            )
        })}
        <Outlet/>
        </div>
    )
}

export default AllTrips