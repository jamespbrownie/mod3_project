import { Outlet, Link } from 'react-router-dom'
import { Button } from "react-bootstrap"
import TripCard from "./TripCard"
import { Pagination, Alert } from 'react-bootstrap'
import { useState } from 'react';

function AllTrips ({trips, handleDeleteTrip}) {
    const [currPage, setCurrPage] = useState(1)
    let items = [];
    let tripPerPage = 3
    function handleClick(e) {
        setCurrPage(e.target.id)
    }
    for (let number = 1; number <= Math.ceil(trips.length/tripPerPage); number++) {
    items.push(
        <Pagination.Item id={number} onClick={handleClick} key={number}>
        {number}
        </Pagination.Item>,
    );
    }
    const indexOfLastTrip = currPage * tripPerPage;
    const indexOfFirstTrip = indexOfLastTrip - tripPerPage;
    const currentTrips = trips.slice(indexOfFirstTrip,indexOfLastTrip)
    return (
        <div id="tripcard">
        {currentTrips.map((trip,index) => {
            return (
                <div id="tripCardDiv">
                <Link to={`/${trip.id}`} key={trip.id} >
                <TripCard 
                key={index} 
                trip={trip} 
                />
                </Link>
                <Button size="sm" onClick={() => handleDeleteTrip(trip)} className='m-1 p-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg></Button>
                </div>
            )
        })}
        <Outlet/>
        <div className="mt-4" id="pagination">
            <Pagination>{items}</Pagination>
        </div>
        </div>
    )
}

export default AllTrips