
import TripCard from "./TripCard"

function AllTrips ({trips}) {
    return (
        <div id="tripcard">
        {/* <p>{trips}</p>
        <p> hello? </p> */}
        {trips.map((trip) => {
            return (
                <TripCard trip={trip} />
            )
        })}
        </div>
    )
}

export default AllTrips