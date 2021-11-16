import Card from "react-bootstrap/Card"
import TripDetail from "./TripDetail"
function TripCard ({trip}) {
    return (
        <>
        <Card className="my-3" >
            <Card.Body>
                {/* <Card.Img  src="https://image.shutterstock.com/image-photo/beautiful-beach-chairs-on-sandy-260nw-1917936725.jpg" /> */}
                <Card.Title>{trip.name}</Card.Title>
                <hr></hr>
                <Card.Text>From {trip.start_date.slice(0,10)} to {trip.end_date.slice(0,10)} with a budget of ${trip.budget}</Card.Text>
                <Card.Text> Participants: {trip.participants}</Card.Text>
                <hr></hr>
            </Card.Body>
        </Card>
        </>
    )
}

export default TripCard