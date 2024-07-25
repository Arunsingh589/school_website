import AboutUs from "./components/AboutUs";
import Academics from "./components/Academics";
import Admissions from "./components/Admission";
import Faculty from "./components/Faculty";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "./components/Students";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <HomePage />
      <AboutUs />
      <Academics />
      <Admissions />
      <Faculty />
      <Students />
      <Gallery />
      <ContactUs />
    </Router>
  );
}

export default App;
