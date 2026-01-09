import { BrowserRouter, Routes, Route } from "react-router"; // react router library
/* Declarative Mode routing:- it means we use Routing Components to configure routing. */

import Body from "./components/Body.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            {/* child routes */}
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// Route structure:-
/*
  Navbar
  Body
    - Login
  Footer
*/

// URL Paths:-
/*
  /       -> Body
  /home   -> Body with home component
  /login  -> Body with login component
*/
