// import React, { useEffect, useState } from "react";
// import "../Toronto/Toronto.scss";

// const TorontoPage = () => {
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     const apiKey = "AIzaSyC6GLKy0ilHEEK7cJ2ERnEIU1k30AeseOU";
//     const city = "Toronto";

//     fetch(
//       `https://maps.googleapis.com/maps/api/place/textsearch/json?query=5+star+hotels+in+${city}&key=${apiKey}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setHotels(data.results);
//       })
//       .catch((error) => console.error("Error fetching hotel data:", error));
//   }, []);

//   return (
//     <div className="city_page">
//       <h1>Toronto</h1>
//       <p>Brief description of Toronto...</p>

//       <section className="hotels_section">
//         <h2>Hotels</h2>
//         <ul>
//           {hotels.map((hotel) => (
//             <li key={hotel.place_id}>
//               {hotel.name} - {hotel.rating} stars
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section className="restaurants_section">
//         <h2>Restaurants</h2>
//       </section>
//     </div>

//   );
// };

// export default TorontoPage;

// TorontoPage.js

import React from "react";
import "../Toronto/Toronto.scss";
import Maps from "../../component/Maps/Maps";

const TorontoPage = () => {
  return (
    <div className="city_page">
      <h1>TORONTO</h1>
      <p> Open your arms to one of Canada's most vibrant cities.Toronto is a growing city and there is plenty to explore. 
        Find a quality hotel that's budget friendly  and explore some of Toronto's multicultural foods that are delicious and affordable! </p>
      <section className="hotels_section">
        <h2>HOTELS</h2>
        <Maps />
      </section>

      <section className="restaurants_section">
        <h2>FOOD</h2>
        <Maps />
      </section>

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
