import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Button, ProgressBar } from 'react-bootstrap';
import DayCard from './DayCard';

function TripDetail() {
    const [trip, setTrip] = useState({
        name:"",
        budget: 0,
        participants: "",
        start_date:"",
        end_date:"",
        days: [],
        totalCost: 0
    })
    const [totalCost, setTotalCost] = useState(0)
    const [overBudget, setOverBudget] = useState(false)
    let params = useParams();
    let url = "http://localhost:9292/trips/" + params.TripDetailid
    useEffect(()=>{
        fetch(url).then(r=>r.json()).then(t=> {
            setTrip(t)
            setTotalCost(t.totalCost)
            if (t.totalCost > t.budget) {
                setOverBudget(true)
            }
        })
    },[totalCost])

    function updateTotalCost(currentCost) {
        let newCost = totalCost + currentCost
        setTotalCost(newCost)
        if (newCost>trip.budget) {
            setOverBudget(true)
        } else {
            setOverBudget(false)
        }
    }

    // const minDayId = 

    return(
        <div className="mt-3">
            {
                overBudget?
                <Alert variant="danger">
                    <Alert.Heading>Oops, looks like we are over our budget!</Alert.Heading>
                    <Button size="sm" onClick={() => setOverBudget(false)} variant="outline-danger">
                        Whatever!
                    </Button>
                </Alert>:null
            }
            <h3 id="tripname">{trip.name}</h3>
            <p>{trip.start_date.slice(0,10)} to {trip.end_date.slice(0,10)} with ${trip.budget} budget</p>
            <p>Total cost is ${trip.totalCost}</p>
            <div id="progressbar">
                <h5>What's left in the budget: <b>${trip.budget-trip.totalCost}</b></h5>
                <ProgressBar animated variant="success" max={trip.budget} now={trip.totalCost} label={`$${trip.totalCost}`} />
            </div>
            {trip.days.map((day, index)=>{
                return (
                    <div id="tripDetail" key={index}>
                <DayCard 
                dayNumber={index}
                updateTotalCost={updateTotalCost} 
                day={day} />                    
                    </div>
                )
            })}
        </div>
    )
}

export default TripDetail