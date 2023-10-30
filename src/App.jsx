import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "./Components/Spinner/Spinner";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import ExploreSliderContextProvider from "./context/ExploreSliderContext";

function App() {
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // Function to simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      try {
        // Simulate a delay for loading data
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Change the delay as needed

        // Data loading was successful, stop showing the loading spinner
        setLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);

        // If loading fails, increase the retry count
        setRetryCount((prevRetryCount) => prevRetryCount + 1);
      }
    };

    // Retry loading a maximum of 3 times
    if (retryCount < 3 && loading) {
      fetchData();
    } else {
      // If max retries are reached or loading is complete, stop showing the loading spinner
      setLoading(false);
    }
  }, [retryCount]);

  return (
    <>
      <ExploreSliderContextProvider>
        {loading ? <Spinner /> : <Header />}
        <Routes>
          <Route path="/" element={loading ? <Spinner /> : <Home />} />
          <Route
            path="/coming"
            element={loading ? <Spinner /> : <ComingSoon />}
          />
          <Route path="*" element={loading ? <Spinner /> : <NotFound />} />
        </Routes>
        {loading ? <Spinner /> : <Footer />}
      </ExploreSliderContextProvider>
    </>
  );
}

export default App;
