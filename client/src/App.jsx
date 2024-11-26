import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <h1>Upload files using Cloudinary Service</h1>
      <Link to="/">Home</Link> | <Link to="/unauthorized">Unautorized</Link> |{" "}
      <Link to="/secure">Secure</Link>
      <br />
      <br />
      <Outlet />
    </div>
  );
};

export default App;
