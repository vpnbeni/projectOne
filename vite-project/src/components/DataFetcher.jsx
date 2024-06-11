import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactCardFlip from "react-card-flip";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles
import "../fontAwesomeConfig"; // Ensure this is imported once in your app

const Test = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //   console.log(data);

  //   flip
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  //   slideshow component
  const slides = document.querySelectorAll(".slide");
  let count = false;
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
  const slideImage = () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${count * 100}%)`;
    });
  };
  const goNext = () => {
    count = !count;
    slideImage();
  };
  const goPrev = () => {
    count = !count;
    slideImage();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jupiter1xl-2e281856744c.herokuapp.com/api/contents"
          // "http://localhost:3000/api/contents/?format=json"
          // "https://project-one-server-kappa.vercel.app/api/contents/?format=json"
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
    <>
      <div className="">
        
      </div>
      <div className="dataFetcherContainer prevNext">
      <div className="prevBtn" onClick={() => goPrev()}>
          <div>
            <FontAwesomeIcon className="icon" icon="fa-solid fa-arrow-left" />
          </div>
        </div>
        <div className="nextBtn" onClick={() => goNext()}>
          <div>
            <FontAwesomeIcon className="icon" icon="fa-solid fa-arrow-right" />
          </div>
        </div>
        <div className="btnDiv">
          <button className="flipBtn" onClick={flipCard}>
            Flip <FontAwesomeIcon icon={["fas", "repeat"]} />
          </button>
        </div>
        <div className="slider">
          {data.map((item) => {
            const homeIngredients = item.home_ingredients
              .split("\n")
              .filter((ing) => ing.trim() !== "");
            const boxIngredients = item.box_ingredients
              .split("\n")
              .filter((ing) => ing.trim() !== "");
            const procedureSteps = item.procedure
              .split("\n")
              .filter((step) => step.trim() !== "");

            return (
              <div key={item.id} className="slide ">
                <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
                  <div className="card">
                    <h1 className="serial bottomMargin">
                      Serial Number: {item.serial_number}
                    </h1>
                    <h2>Objective</h2>
                    <p className="bottomMargin">{item.objective}</p>
                    <div className="ingredients">
                      <div>
                        <h2>Home Ingredients</h2>
                        <div>
                          {homeIngredients.map((ing, index) => (
                            <div key={index}>{ing}</div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h2>Box Ingredients</h2>
                        <div>
                          {boxIngredients.map((ing, index) => (
                            <div key={index}>{ing}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" card card-back">
                    <h2 className="procedure bottomMargin">Procedure</h2>
                    <div className=" bottomMargin">
                      {procedureSteps.map((step, index) => (
                        <div key={index}>{step}</div>
                      ))}
                    </div>
                    <h3 className="explanation">Explanation</h3>
                    <p>{item.explanation}</p>
                  </div>
                </ReactCardFlip>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Test;
