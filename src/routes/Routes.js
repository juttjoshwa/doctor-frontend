import React from "react"; // Import React
import { Routes, Route } from "react-router-dom"; // Import Routes and Route from react-router-dom
import Home from "../Pages/Home"; // Import the Home component
import Service from "../Pages/Service"; // Import the Service component
import SignUp from "../Pages/SignUp"; // Import the SignUp component
import Login from "../Pages/Login"; // Import the Login component
import Contact from "../Pages/Contact"; // Import the Contact component
import Doctor from "../Pages/Doctor/Doctor"; // Import the Doctor component (might be used in a different file)
import DoctorDetails from "../Pages/Doctor/DoctorDetails"; // Import the DoctorDetails component (might be used in a different file)
import WorkingOnIt from "../Pages/HelperPages/WorkingOnIt"; // Import the WorkingOnIt component (a helper page, perhaps for a work in progress)

const RoutesAll = () => {
  return (
    <Routes>
      {/* Define routes and their corresponding components */}
      <Route path="/" element={<Home />} /> {/* Root route mapped to the Home component */}
      <Route path="/doctor" element={<WorkingOnIt />} /> {/* "/doctor" route mapped to the WorkingOnIt component */}
      <Route path="/doctor/:id" element={<DoctorDetails />} /> {/* "/doctor/:id" route mapped to the DoctorDetails component */}
      <Route path="/login" element={<Login />} /> {/* "/login" route mapped to the Login component */}
      <Route path="/signup" element={<SignUp />} /> {/* "/signup" route mapped to the SignUp component */}
      <Route path="/contact" element={<Contact />} /> {/* "/contact" route mapped to the Contact component */}
      <Route path="/service" element={<Service />} /> {/* "/service" route mapped to the Service component */}
    </Routes>
  );
};

export default RoutesAll;
