import React, { useEffect, useState } from "react";
import "../Toronto/Toronto.scss";

const TorontoPage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const apiKey = "AIzaSyC6GLKy0ilHEEK7cJ2ERnEIU1k30AeseOU";
    const city = "Toronto";

    fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=5+star+hotels+in+${city}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setHotels(data.results);
      })
      .catch((error) => console.error("Error fetching hotel data:", error));
  }, []);

  return (
    <div className="city_page">
      <h1>Toronto</h1>
      <p>Brief description of Toronto...</p>

      <section className="hotels_section">
        <h2>Hotels</h2>
        <ul>
          {hotels.map((hotel) => (
            <li key={hotel.place_id}>
              {hotel.name} - {hotel.rating} stars
            </li>
          ))}
        </ul>
      </section>

      <section className="restaurants_section">
        <h2>Restaurants</h2>
        {/* Add your restaurant content here */}
      </section>
    </div>
  );
};

export default TorontoPage;
