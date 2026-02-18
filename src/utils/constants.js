// constants.js file contains all hard coded urls, strings.

// const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://devtinder-backend-x5rv.onrender.com";

let BASE_URL;

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
  BASE_URL = import.meta.env.VITE_LOCAL_BACKEND_URL; // Local dev backend url
} else {
  BASE_URL = import.meta.env.VITE_DEPLOYED_BACKEND_URL; // Deployed backend url
}

export { BASE_URL };
