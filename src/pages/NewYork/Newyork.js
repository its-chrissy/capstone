import React, { useState, useEffect } from "react";
import "./Newyork.scss";
import Maps from "../../component/Maps/Maps";
import axios from "axios";
import RestaurantsList from "../../component/Restaurant/Restaurant";

const NewyorkPage = () => {
  // const [hotels, setHotels] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:8080/hotels").then((response) => {
  //     setHotels(response.data);
  //   });
  // }, []);
  const [citiesn, setCitiesn] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/city").then((response) => {
      setCitiesn(response.data);
    });
  }, []);

  const hotels = [
    {
      name: "Hotel Riu Plaza New York Times",
      lat: 40.76156044538144,
      lng: -73.98815847154032,
    },

    {
      name: "Pestana Park Ave.",
      lat: 40.75239325989206,
      lng: -73.97888875717308,
    },

    {
      name: "Hilton Times Square",
      lat: 40.758014318214975,
      lng: -73.98812865444295,
    },

    {
      name: "Millennium Hotel",
      lat: 40.75833938984744,
      lng: -73.98357962794793,
    },

    {
      name: "Park Central Hotel",
      lat: 40.76588060547543,
      lng: -73.98109053797894,
    },
  ];

  const foods = [
    { address: "King Taps", lat: 43.648714289687405, lng: -79.38025291999334 },

    { address: "Gusto", lat: 43.645584810222466, lng: -79.39994343861073 },

    { address: "PAI", lat: 43.64803717468791, lng: -79.38853985004046 },
  ];

  return (
    <div className="city_page">
      <h1>NEW YORK</h1>
      <p>
        Traveling to the "Big Apple" is an exhilarating experience. Whether
        exploring iconic landmarks to catching a broadway show or shopping till
        you drop, you will not be dissapointed. NYC is a food lover's paradise,
        offering a culinary journey around the globe. Let us help you plan this
        affordable city escape!
      </p>

      <section className="hotels_section">
        <h2>HOTELS</h2>
        <div className="hotels_list">
          <h3 className="hotels_list_h3">4+ Stars less than $200 a night!</h3>
          <ul>
            <li>
              <a href="https://www.riu.com/en/hotel/usa/new-york/hotel-riu-plaza-new-york-times-square/">
                Hotel Riu Plaza
              </a>
            </li>
            <li>
              <a href="https://www.pestana.com/en/hotel/pestana-park-avenue?">
                Pestana Park Ave.
              </a>
            </li>
            <li>
              <a href="https://www.hilton.com/en/hotels/nyctshh-hilton-times-square/?">
                Hilton Times Square
              </a>
            </li>
            <li>
              <a href="https://www.millenniumhotels.com/en/new-york/millennium-hotel-broadway-times-square/">
                Millennium Hotel
              </a>
            </li>
            <li>
              <a href="https://www.parkcentralny.com/">Park Central Hotel</a>
            </li>
          </ul>
        </div>
        <Maps markers={hotels} />
      </section>

      <section className="restaurants_section">
        <h2>FOOD</h2>
        <Maps markers={citiesn} />
        <div className="restaurants_section2"></div>
      </section>

      <RestaurantsList restaurants={citiesn} />

      <section className="gallery_section">
        <h2>GALLERY</h2>
        <div className="gallery_grid">
          <img
            src="https://plantbasednews.org/app/uploads/2023/04/plant-based-news-food-emissions-new-york-city.jpg"
            alt="NY Image 1"
          />
          <img
            src="https://www.travelandleisure.com/thmb/TWAgiQgn-Y57sACCzhJCiwUtKaE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dominick-hotel-NYVIEW0819-bbe9d095a55b4d288aeb0f386732a7b5.jpg"
            alt="NY Image 2"
          />
          <img
            src="https://bigseventravel.com/wp-content/uploads/2022/11/shutterstock_1089093521-scaled.jpg"
            alt="NY Image 3"
          />
          <img
            src="https://assets3.thrillist.com/v1/image/3079017/1584x1056/flatten;crop;webp=auto;jpeg_quality=50.jpg"
            alt="NY Image 4"
          />
          <img
            src="https://c8.alamy.com/comp/CR82WG/restaurant-in-times-square-manhattan-new-york-city-new-york-united-CR82WG.jpg"
            alt="NY Image 6"
          />
          <img
            src="https://bigseventravel.com/wp-content/uploads/2022/01/Central-Park.jpg"
            alt="NY Image 5"
          />
        </div>
      </section>
    </div>
  );
};

export default NewyorkPage;
