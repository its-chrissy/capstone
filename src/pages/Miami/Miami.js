import React, { useState, useEffect } from "react";
import "../Miami/Miami.scss";
import Maps from "../../component/Maps/Maps";
import axios from "axios";
import RestaurantsList from "../../component/Restaurant/Restaurant";

const MiamiPage = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/city").then((response) => {
      setCities(response.data);
    });
  }, []);

  const hotels = [
    {
      name: "The Meridian Hotel",
      lat: 25.77763953280543,
      lng: -80.13574455953511,
    },

    {
      name: "Circa 39 Hotel",
      lat: 25.815350836370293,
      lng: -80.12218331101033,
    },

    {
      name: "Hyatt Place Miami ",
      lat: 25.81227084234005,
      lng: -80.3280785934137,
    },

    {
      name: "Blue Moon Hotel",
      lat: 25.782683474169048,
      lng: -80.1318062092925,
    },

    {
      name: "Fortune House Hotel",
      lat: 25.77572054670755,
      lng: -80.19615603997535,
    },
  ];

  return (
    <div className="city_page">
      <h1>MIAMI</h1>
      <p>
        Traveling to Miami offers a vibrant and diverse experience,
        characterized by its sun-soaked beaches, lively cultural scene, and
        vibrant nightlife. Let us help you find Hotels at amazing rates and get
        a taste of the Latin infused dishes at a price you can afford!
      </p>
      <section className="hotels_section">
        <h2>HOTELS</h2>
        <div className="hotels_list">
          <h3 className="hotels_list_h3">4+ Stars less than $200 a night!</h3>
          <ul>
            <li>
              <a href="https://themeridianmiami.com/">The Meridian Hotel</a>
            </li>
            <li>
              <a href="https://www.circa39.com/?">Circa 39 Hotel</a>
            </li>
            <li>
              <a href="https://www.hyatt.com/en-US/hotel/florida/hyatt-place-miami-airport-west-doral/miazd?src=corp_lclb_gmb_seo_miazd">
                Hyatt Place Miami
              </a>
            </li>
            <li>
              <a href="https://www.bluemoonhotel.com/">Blue Moon Hotel</a>
            </li>
            <li>
              <a href="http://www.fortunehousehotel.com/">
                Fortune House Hotel
              </a>
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
            src="https://assets.prevu.com/blogs/images/best-neighborhoods-in-miami-buyers-guide/998a7b5c31efcb56356e106fede789e6?ixlib=rb-4.0.3&w=450&fit=crop&lossless=true&auto=format&q=40&dpr=2&s=34c2ade66beee210f424c9f67f2c36d2"
            alt="Miami Image 1"
          />

          <img
            src="https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5862a23026f8f.jpg/1920x1080/fit/80/201077a028f23630008e10851dd4f093.jpg"
            alt="Miami Image 2"
          />
          <img
            src="https://www.essence.com/wp-content/uploads/2022/04/BiscayneBay_Miami-Cropped.jpg?width=1280"
            alt="Miami Image 3"
          />
          <img
            src="https://cdn1.matadornetwork.com/blogs/1/2022/11/la-mar-best-restaurants-in-miami-for-latin-american-food.jpg"
            alt="Miami Image 4"
          />
          <img
            src="https://miamidiario.com/wp-content/uploads/miami-beach-38-1000x660.jpg"
            alt="Miami Image 5"
          />
          <img
            src="https://www.miamiandbeaches.com/getmedia/021c8171-ffba-4a91-ad7a-6ff0a45ac173/Amara_at_Paraiso_dining_room_1440x900.jpg?width=1000&resizemode=force"
            alt="Miami Image 6"
          />
        </div>
      </section>
    </div>
  );
};

export default MiamiPage;
