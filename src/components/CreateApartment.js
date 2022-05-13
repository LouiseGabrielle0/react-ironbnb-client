import React from "react";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const CreateApartment = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(1);
  const navigate = useNavigate()


function handleSubmit (e)  {
e.preventDefault();
const details = {title: title, pricePerDay: price}

axios.post("https://ironbnb-m3.herokuapp.com/apartments", details)
.then((response) => {
    setTitle("") //resets values 
    setPrice(1)
    navigate('/apartments')
})
}


  return (
    <div className="container">
      <h2>Add New Appartment</h2>
      <form onSubmit={handleSubmit}>
        <div className="row m-5">
          <div className="col-sm">
            <label>
              Title
              <input
                type="text"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>
          </div>
          <div className="col-sm">
            <label>
              Price Per Day     
              <input
                type="number"
                name="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </label>
          </div>
          <div className="col-sm">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateApartment;
