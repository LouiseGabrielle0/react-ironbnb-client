import "./App.css";
import NavBar from "./components/NavBar";
import ApartmentsPage from "./components/ApartmentsPage";
import CreateApartment from "./components/CreateApartment";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/apartments" element={<ApartmentsPage />} />
        <Route path="/create" element={<CreateApartment />} />
      </Routes>
    </div>
  );
}

export default App;
