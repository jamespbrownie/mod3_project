import Card from "react-bootstrap/Card"

function TripCard ({trip}) {
    return (
        <>
        <Card>
            <Card.Body>
                <Card.Img  src="https://image.shutterstock.com/image-photo/beautiful-beach-chairs-on-sandy-260nw-1917936725.jpg" />
                <Card.Title> Trip Name: {trip.name}</Card.Title>
                <Card.Text>Budget: {trip.budget}</Card.Text>
                <Card.Text> Start Date: {trip.start_date}</Card.Text>
                <Card.Text> End Date: {trip.end_date}</Card.Text>
                <Card.Text> Participants: {trip.participants}</Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default TripCard