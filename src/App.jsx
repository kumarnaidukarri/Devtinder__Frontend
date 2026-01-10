import { BrowserRouter, Routes, Route } from "react-router"; // react router library
/* Declarative Mode routing:- it means we use Routing Components to configure routing. */
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore.js"; // redux store

// my components
import Body from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import Feed from "./components/Feed.jsx";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              {/* child routes */}
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
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
  /       -> Body with feed component
  /home   -> Body with home component
  /login  -> Body with login component
*/
