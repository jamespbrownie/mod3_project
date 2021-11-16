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
        days: []
    })
    let params = useParams();
    let url = "http://localhost:9292/trips/" + params.TripDetailid
    useEffect(()=>{
        fetch(url).then(r=>r.json()).then(t=>setTrip(t))
    },[])
    console.log(trip)
    return(
        <div className="mt-3">
            <h3>{trip.name}</h3>
            <p>{trip.start_date.slice(0,10)} to {trip.end_date.slice(0,10)} with ${trip.budget} budget</p>
            {trip.days.map((day)=>{
                return <DayCard day={day} />
            })}
        </div>
    )
}

export default TripDetail