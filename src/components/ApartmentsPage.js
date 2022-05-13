import { useState, useEffect } from "react";
import axios from "axios";

import React from "react";

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    axios
      .get("https://ironbnb-m3.herokuapp.com/apartments")
      .then((response) => {
        // console.log("response.data", response.data)
        setApartments(response.data);
      });
  });
  console.log(apartments);
  return (
    <div className="container">
      <div className="row">
        <h3>List of Apartments</h3>
        {apartments ? (
          apartments.map((apartment) => {
            return (
              // eslint-disable-next-line react/style-prop-object
              <div class="card m-5" style={{ width: "18rem" }}>
                <img src={apartment.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{apartment.title}</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button>More Details</button>
                </div>
              </div>
            );
          })
        ) : (
          <p>"Loading</p>
        )}
      </div>
    </div>
  );
}

export default ApartmentsPage;
