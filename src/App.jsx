import { BrowserRouter, Routes, Route } from "react-router"; // react router library
/* Declarative Mode routing:- it means we use Routing Components to configure routing. */

import Body from "./components/Body.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            {/* child routes */}
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// route structure
/*
  Body
    - Home
    - Login
*/
