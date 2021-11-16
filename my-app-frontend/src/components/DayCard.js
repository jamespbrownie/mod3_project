import { Card } from 'react-bootstrap';
function DayCard({day}) {
    return (
        <div className="my-3" id="daycard">
            <Card className="text-center">
                <Card.Header>Day {day.id}</Card.Header>
                <Card.Body>
                    {day.activities.map((a)=>{
                        return <Card.Text>${a.cost} - {a.name} ({a.duration}h)</Card.Text>
                    })}
                </Card.Body>
            </Card>
        </div>
    )
}

export default DayCard