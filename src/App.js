import React, { useEffect } from "react"; // Import React and its dependencies
import "./App.css"; // Import the CSS file for styling
import Layout from "./layOuts/Layout"; // Import the Layout component (presumably the main layout of the application)
import { UserState } from "./Context/AuthContext"; // Import the UserState from the AuthContext
import axios from "axios"; // Import Axios for making API requests
import { toast } from "react-hot-toast"; // Import the toast function from "react-hot-toast" for displaying notifications

const App = () => {
  axios.defaults.baseURL = "https://doctor-project-backend.vercel.app/api"; // Set the base URL for Axios requests
  axios.defaults.withCredentials = true; // Allow sending cookies in cross-origin requests
  const { setAuhtenticated, setCurrentUserData, CurrentUserData } = UserState(); // Get the authentication state and current user data from the AuthContext

  useEffect(() => {
    // useEffect hook to fetch user data and set authentication state on component mount
    axios
      .get("/auth/me", {
        withCredentials: true, // Include credentials (cookies) in the request
      })
      .then((res) => {
        // If the API call is successful
        setCurrentUserData(res.data.newUser); // Set the current user data in the context
        setAuhtenticated(true); // Set the authentication state to true
      })
      .catch((err) => {
        // If the API call fails
        console.log(err); // Log the error to the console
        setAuhtenticated(false); // Set the authentication state to false
      });
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  return <Layout />; // Render the Layout component (main layout of the application)
};

export default App;
