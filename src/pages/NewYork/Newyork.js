import React from "react";
import "./Newyork.scss";
import Maps from "../../component/Maps/Maps";

const NewyorkPage = () => {
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
