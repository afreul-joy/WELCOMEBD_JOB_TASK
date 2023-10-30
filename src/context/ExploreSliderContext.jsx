/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ExploreSliderContext = createContext();

const ExploreSliderContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/public/place.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <ExploreSliderContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ExploreSliderContext.Provider>
  );
};

export default ExploreSliderContextProvider;
