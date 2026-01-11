import { BrowserRouter, Routes, Route } from "react-router"; // react router library
/* Declarative Mode routing:- it means we use Routing Components to configure routing. */
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore.js"; // redux store

// my components
import Body from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import Feed from "./components/Feed.jsx";
import Profile from "./components/Profile.jsx";

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
              <Route path="/profile" element={<Profile />} />
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

// *** Page Reload :-
/*
  when we reload our react app or page.
  everything will refresh whole app, components, Redux Store. except our Cookies.
  so, components are destroyed, re-creates newly, renders.
 */
