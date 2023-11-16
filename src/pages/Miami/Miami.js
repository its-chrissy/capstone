import React from "react";
import "../Miami/Miami.scss";
import Maps from "../../component/Maps/Maps";

const MiamiPage = () => {
  return (
    <div className="city_page">
      <h1>MIAMI</h1>
      <p>
        Traveling to Miami offers a vibrant and diverse experience,
        characterized by its sun-soaked beaches, lively cultural scene, and
        vibrant nightlife. Let us help you find Hotels at amazing rates and get a taste
        of the Latin infused dishes at a price you can afford!
      </p>

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
