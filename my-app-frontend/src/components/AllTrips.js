import { Outlet, Link } from 'react-router-dom'
import TripCard from "./TripCard"
import { Pagination } from 'react-bootstrap'
import { useState } from 'react';

function AllTrips ({trips}) {
    const [currPage, setCurrPage] = useState(1)
    let items = [];
    let tripPerPage = 3
    function handleClick(e) {
        setCurrPage(e.target.id)
    }
    for (let number = 1; number <= trips.length/tripPerPage+1; number++) {
    items.push(
        <Pagination.Item id={number} onClick={handleClick} key={number} active={number === currPage}>
        {number}
        </Pagination.Item>,
    );
    }
    const indexOfLastTrip = currPage * tripPerPage;
    const indexOfFirstTrip = indexOfLastTrip - tripPerPage;
    const currentTrips = trips.slice(indexOfFirstTrip,indexOfLastTrip)
    return (
        <div id="tripcard">
        {/* <p>{trips}</p>
        <p> hello? </p> */}
        {currentTrips.map((trip,index) => {
            return (
                <Link to={`/${trip.id}`} key={trip.id} >
                <TripCard key={index} trip={trip} />
                </Link>
            )
        })}
        <Outlet/>
        <div id="pagination">
            <Pagination>{items}</Pagination>
        </div>
        </div>
    )
}

export default AllTrips