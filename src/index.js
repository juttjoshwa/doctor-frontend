import React, { Fragment } from "react"; // Import React and its dependencies
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering
import App from "./App"; // Import the main component of the application
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import AuthContext from "./Context/AuthContext"; // Import the AuthContext (a custom context for authentication)
import {} from "react-hot-toast"; // Import something from the "react-hot-toast" library (might be used elsewhere in the application)

// Create a React root using the experimental createRoot API
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the main component within the BrowserRouter and AuthContext
root.render(
  <Fragment>
    <BrowserRouter>
      <AuthContext>
        <App />
      </AuthContext>
    </BrowserRouter>
  </Fragment>
);
