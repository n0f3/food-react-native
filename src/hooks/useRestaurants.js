import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  // new state to handle requests
  const [restaurants, setRestaurants] = useState([]);
  // Error handling for API
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          searchTerm,
          location: "new york city",
        },
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  // Call searchApi when component is first rendered
  // BAD CODE. this will run for every render!
  // searchApi("pasta");

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, restaurants, errorMessage];
};
