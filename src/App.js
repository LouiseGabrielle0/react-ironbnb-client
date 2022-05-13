import "./App.css";
import NavBar from "./components/NavBar";
import ApartmentsPage from "./components/ApartmentsPage";
import CreateApartment from "./components/CreateApartment";
import Homepage from "./components/Homepage";
import ApartmentDetails from "./components/ApartmentDetails";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    axios
      .get("https://ironbnb-m3.herokuapp.com/apartments")
      .then((response) => {
        // console.log("response.data", response.data)
        setApartments(response.data);
      });
  }, []);

  console.log(apartments);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/apartments"
          element={<ApartmentsPage apartments={apartments} />}
        />
        <Route path="/create" element={<CreateApartment />} />
        <Route
          path="/details/:apartmentID"
          element={<ApartmentDetails apartments={apartments} />}
        />
      </Routes>
    </div>
  );
}

export default App;
