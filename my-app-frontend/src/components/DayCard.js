import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';


function DayCard({day, updateTotalCost, dayNumber}) {
    const [activity, setActivity] = useState(false)
    const [formData, setFormData] = useState({
        name:"",
        cost:0,
        duration:0,
        day_id:day.id
    })
    const [activities, setActivities] = useState(day.activities)

    function addActivity() {
        setActivity(true)
    }

    function handleFormChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/activities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
            }).then((r) => r.json()).then((a)=>{
                updateTotalCost(a.cost)
                handleAddAc(a)
            })
        e.target.reset()
        setActivity(false)        
    }

    function handleDelete(activity) {
        fetch(`http://localhost:9292/activities/${activity.id}`, {
            method: "DELETE"
        })
        .then(r=>r.json()).then(()=>{
            updateTotalCost(activity.cost * -1)
            setActivities(activities.filter( a => a.id !== activity.id))
        })
        
        
        // console.log(activity.id);
    }

    function handleAddAc(a) {
        const newActivityList = [...activities, a]
        setActivities(newActivityList)
        // updateTotalCost(a.cost)
    }

    return (
        <div className="my-3" id="daycard">
            <Card className="text-center">
                <Card.Header>Day {dayNumber+1}</Card.Header>
                <Card.Body>
                    {activities.map((a,index)=>{
                        return (
                            <Card.Text className="my-1" key={index}>
                                ${a.cost} - {a.name} ({a.duration}h) 
                                <span><Button size="sm" onClick={() => handleDelete(a)} className='m-1 p-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg></Button></span>
                            </Card.Text>
                        )
                    })}
                    {activity? 
                    <div id="activityform">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control required name="name" onChange={handleFormChange} type="text" placeholder="Activity Name" />
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Control required name="cost" onChange={handleFormChange} type="number" placeholder="Cost" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control required name="duration" onChange={handleFormChange} type="number" placeholder="Hours" />
                                </Form.Group>
                            </Row>
                            <Button className="mx-2" variant="outline-dark" type="submit">Submit</Button>
                        </Form>
                    </div>
                    : 
                    <Button size="sm"  id="addActivityBtn" onClick={addActivity}>+ Add Activity</Button> }
                </Card.Body>
            </Card>
        </div>
    )
}

export default DayCard