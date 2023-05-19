import React, { useEffect, useState } from 'react';
import Axios from 'axios';

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
    <div>
      {tours.map((tour, index) => (
        <div className="card tour-card" key={index}>
          <img src={tour.imageCover} alt="Tour" className="tour-image" />
          <div className="tour-details">
            <h3 className="name">Tour Name: {tour.name}</h3>
            <p className="Description">Description {tour.description}</p>
            <p className="startDate">start Date: {tour.startDate}</p>
            <p className="endDate">endDate: {tour.endDate}</p>
            <p className="availableSeats">availableSeats: {tour.availableSeats}</p>
            <p className="price">price: {tour.price}</p>
            <button type="button" className="btn-explore">Explore</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourCard;
