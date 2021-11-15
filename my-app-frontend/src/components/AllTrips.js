
import TripCard from "./TripCard"

function AllTrips ({trips}) {
    return (
        <>
        <h1>These are all the trips</h1>
        {/* <p>{trips}</p>
        <p> hello? </p> */}
        {trips.map((trip) => {
            return (
                <TripCard trip={trip} />
            )
        })}
        </>
    )
}

export default AllTrips