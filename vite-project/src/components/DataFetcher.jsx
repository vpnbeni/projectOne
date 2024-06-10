import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles
import "../fontAwesomeConfig"; // Ensure this is imported once in your app

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jupiter1xl-2e281856744c.herokuapp.com/api/contents/"
        );
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="dataFetcherContainer">
      <div className="btnDiv">
        <button className="flipBtn">
          Flip <FontAwesomeIcon icon={["fas", "repeat"]} />
        </button>
      </div>
      <Carousel  >
        {data.map((item) => (
          <div key={item.id} className="card">
            <h2>
              {item.serial_number}. {item.objective}
            </h2>
            <h3>Objective</h3>
            <p>{item.objective}</p>
            <div className="ingredients">
              <div>
                <h3>Home Ingredients</h3>
                <p>{item.home_ingredients}</p>
              </div>
              <div>
                <h3>Box Ingredients</h3>
                <p>{item.box_ingredients}</p>
              </div>
            </div>
            <h3>Procedure</h3>
            <p>{item.procedure}</p>
            <h3>Explanation</h3>
            <p>{item.explanation}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DataFetcher;
