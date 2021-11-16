import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DayCard from './DayCard';

function TripDetail() {
    const [trip, setTrip] = useState({
        name:"",
        budget: 0,
        participants: "",
        start_date:"",
        end_date:"",
        days: [],
        // totalCost: 0
    })
    const [totalCost, setTotalCost] = useState(0)
    let params = useParams();
    let url = "http://localhost:9292/trips/" + params.TripDetailid
    useEffect(()=>{
        fetch(url).then(r=>r.json()).then(t=> {
            setTrip(t)
            setTotalCost(t.totalCost)
            if (t.totalCost > trip.budget) {
                alert("Uh oh, looks like you're over budget! You should remove an activity.")
            }
        })
    },[totalCost])
    console.log(trip)

    function updateTotalCost(currentCost) {
        let newCost = totalCost + currentCost
        setTotalCost(newCost)
    }

    // const minDayId = 

    return(
        <div className="mt-3">
            <h3>{trip.name}</h3>
            <p>{trip.start_date.slice(0,10)} to {trip.end_date.slice(0,10)} with ${trip.budget} budget</p>
            <p>Total cost is ${trip.totalCost}</p>
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