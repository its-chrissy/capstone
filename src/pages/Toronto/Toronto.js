import React, { useState, useEffect } from "react";
import "../Toronto/Toronto.scss";
import axios from "axios";
import RestaurantsList from "../../component/Restaurant/Restaurant";
import Maps from "../../component/Maps/Maps";

const TorontoPage = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/toronto").then((response) => {
      setCities(response.data);
    });
  }, []);

  const hotels = [
    { name: "Novotel", lat: 43.6471467671133, lng: -79.37428792230747 },

    {
      name: "The Rex Hotel",
      lat: 43.6514142601538,
      lng: -79.38837100284931,
    },

    {
      name: "Hotel Victoria",
      lat: 43.64825120295352,
      lng: -79.3781084587085,
    },

    {
      name: "Cambridge Suites Toronto",
      lat: 43.6521496994395,
      lng: -79.37748847840886,
    },

    {
      name: "Holiday Inn Express",
      lat: 43.65265630788467,
      lng: -79.37283564821534,
    },
  ];

  return (
    <div className="city_page">
      <h1>TORONTO</h1>
      <p>
        {" "}
        Open your arms to one of Canada's most vibrant cities.Toronto is a
        growing city and there is plenty to explore. Find a quality hotel that's
        budget friendly and explore some of Toronto's multicultural foods that
        are delicious and affordable!{" "}
      </p>
      <section className="hotels_section">
        <h2>HOTELS</h2>
        <div className="hotels_list">
          <h3 className="hotels_list_h3">4+ Stars less than $200 a night!</h3>
          <ul className="hotels_list-ul">
            <li>
              <a href="https://novotel.accor.com/a/en/canada.html">
                Novotel Toronto Centre
              </a>
            </li>
            <li>
              <a href="https://www.therex.ca/hotel">The Rex Hotel</a>
            </li>
            <li>
              <a href="https://www.hotelvictoria.com">Hotel Victoria</a>
            </li>
            <li>
              <a href="https://www.cambridgesuitestoronto.com">
                Cambridge Suites Toronto
              </a>
            </li>
            <li>
              <a href="https://www.hiexpress.com">Holiday Inn Express</a>
            </li>
          </ul>
        </div>
        <Maps markers={hotels} />
      </section>

      <section className="restaurants_section">
        <h2>FOOD</h2>
        <Maps markers={cities} />
        <div className="restaurants_section2"></div>
      </section>

      <RestaurantsList restaurants={cities} />

      <section className="gallery_section">
        <h2>GALLERY</h2>
        <div className="gallery_grid">
          <img
            src="https://www.photohound.co/images/1014753l.jpg"
            alt="Toronto Image 1"
          />

          <img
            src="https://images.trvl-media.com/lodging/1000000/20000/17300/17289/a09c8eed.jpg?impolicy=resizecrop&rw=1200&ra=fit"
            alt="Toronto Image 3"
          />
          <img
            src="https://images.pexels.com/photos/3076104/pexels-photo-3076104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Toronto Image 2"
          />
          <img
            src="https://nowtoronto.com/wp-content/uploads/2021/02/ufficio-valentine-menu-2021.jpg"
            alt="Toronto Image 1"
          />
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/79/27/87/hilton-toronto.jpg?w=1100&h=-1&s=1"
            alt="Toronto Image 1"
          />
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/22/3b/ac/a6/light-filled-and-open.jpg"
            alt="Toronto Image 1"
          />
        </div>
      </section>
    </div>
  );
};

export default TorontoPage;
