import React from "react";
import { useParams } from "react-router-dom";

const ApartmentDetails = (props) => {
  const { apartmentID } = useParams();
  const apartmentArr = props.apartments;

  console.log("The ap arr is", apartmentArr);

  const apartmentDetails = apartmentArr.find((apartment) => {
    // console.log(apartment._id)
    console.log(apartmentID);
    return apartment._id === apartmentID;
  });

  console.log("The apart details is", apartmentDetails);

  const renderDetails = () => {
    return (
      <>
        <div className="card m-5" style={{ width: "18rem" }}>
          <img src={apartmentDetails.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{apartmentDetails.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </>
    );
  };

  return <div>{apartmentDetails ? renderDetails() : <p> Loading....</p>}</div>;
};

export default ApartmentDetails;
