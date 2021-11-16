import { useParams } from 'react-router-dom';

function TripDetail(trip) {
    let params = useParams();
    return(
        <>

        <h1>This is the trip detail page</h1>
        <p>This is trip number: {params.TripDetailid}</p>

        </>
    )
}

export default TripDetail