import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const formattedDate = formatter.format(date);
  return formattedDate;
}


const TourCard = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://localhost:5000/api/tour');
        const data = response.data;
        setTours(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="tour-card-container">
      {tours.map((tour, index) => (
        <div className="card tour-card" key={index}>
          <div className="tour-details">
            <h3 className="tour-name">{tour.name}</h3>
            <p className="dates">{formatDate(tour.startDate)} - {formatDate(tour.endDate)}</p>
            <img src={tour.imageCover} alt="Tour" className="tour-image" />
            {/**<p className="description">Description: {tour.description}</p>**/}
            <p className="availableSeats">Available Seats: {tour.availableSeats}</p>
            <p className="tour-price">Price: ${tour.price}</p>
            <button type="button" className="btn-explore">Explore</button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default TourCard;
