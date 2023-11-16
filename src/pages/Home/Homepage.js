import "./Homepage.scss";
import React, { useState, useEffect } from "react";
import Card from "../../component/Card/Card";
import { Link } from "react-router-dom";
import Emailpopup from "../../component/Emailpopup/Emailpopup";

const cities = [
  { name: "Toronto", description: "Explore the beauty of Toronto." },
  { name: "NewYork", description: "Discover the city that never sleeps." },
  { name: "Miami", description: "Beach, Party and more in sunny Miami." },
];
const Homepage = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 60000);

    return () => clearTimeout(timeout);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="home">
      <h4>Providing you with affordable ways to travel.
      Pick a city and start planning!</h4>

      <div className="city-list">
        {cities.map((city) => (
          <Link
            key={city.name}
            to={`/${city.name.toLowerCase()}`}
            className="city-link"
          >
            <Card key={city.name} city={city} />
          </Link>
        ))}
        {showPopup && <Emailpopup onClose={closePopup} />}
      </div>
    </section>
  );
};

export default Homepage;
