import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';


function DayCard({day}) {
    const [activity, setActivity] = useState(false)

    function addActivity() {
        setActivity(true)
    }

    return (
        <div className="my-3" id="daycard">
            <Card className="text-center">
                <Card.Header>Day {day.id}</Card.Header>
                <Card.Body>
                    {day.activities.map((a)=>{
                        <>
                        return <Card.Text>${a.cost} - {a.name} ({a.duration}h)</Card.Text>
                        </>
                    })}
                    {activity? 
                    <Form >
                    <Form.Group className="mb-3">
                        <Form.Label>Activity Name</Form.Label>
                        <Form.Control  name="name" type="text" placeholder="Enter Activity Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Activity Name</Form.Label>
                        <Form.Control  name="price" type="text" placeholder="Enter Activity Price" />
                    </Form.Group>
                    </Form>
                    : 
                    <button  id="addActivityBtn" onClick={addActivity}>+ Add Activity</button> }
                </Card.Body>
            </Card>
        </div>
    )
}

export default DayCard