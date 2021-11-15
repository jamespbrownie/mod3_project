import { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import moment from 'moment';

function NewTripForm({handleAddTrip}) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [formData, setFormData] = useState({
        name: "",
        participants: "",
        budget: 0,
        start_date: startDate.getTime(),
        end_date: endDate.getTime()
    })
    function handleForm(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleAddTrip(formData)
    }

    console.log(formData)
    return (
        <div className="pt-5 trip_form">
            <h2>Create New Trip</h2>
            <div id='tripform'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Trip Name</Form.Label>
                        <Form.Control onChange={handleForm} name="name" type="text" placeholder="Enter Trip Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Participants</Form.Label>
                        <Form.Control onChange={handleForm} name="participants" type="text" placeholder="Enter Trip Participants (e.g Mark,Jason,Karen...)" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                            <Form.Label>Budget</Form.Label>
                            <Form.Control onChange={handleForm} name="budget" type="number" placeholder="Budget" />
                        </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Start Date</Form.Label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy/MM/d" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>End Date</Form.Label>
                            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} dateFormat="yyyy/MM/d" />
                        </Form.Group>
                    </Row>
                    <Button variant="outline-dark" className="mt-3" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default NewTripForm