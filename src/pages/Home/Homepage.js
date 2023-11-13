import "./Homepage.scss";
import React from "react";
import Card from "../../component/Card/Card";
import { Link } from "react-router-dom";

const cities = [
  { name: "Toronto", description: "Explore the beauty of Toronto." },
  { name: "NewYork", description: "Discover the city that never sleeps." },
  { name: "Miami", description: "Beach, Party and more in sunny Miami." },
];

const HomePage = () => {
  return (
    <section className="home">
      <h1>Your City Escape Awaits</h1>
      <div className="city-list">
        {cities.map((city) => (
          <Link
            key={city.name}
            to={`/${city.name.toLowerCase()}`}
            className="city-link">
            <Card key={city.name} city={city} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
