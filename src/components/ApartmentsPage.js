import {Link} from 'react-router-dom'

import React from "react";

function ApartmentsPage(props) {
  

 
  return (
    <div className="container">
      <div className="row">
        <h3>List of Apartments</h3>
        {props.apartments ? (
          props.apartments.map((apartment) => {
            return (
              <div className="card m-5" style={{ width: "18rem" }}>
                <img src={apartment.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{apartment.title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to={`/details/${apartment._id}`}>More Details</Link>
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
