import React from "react";
import "./CaseStudies.css"; // Styling file
import DeliveryPersonImage from "../../assets/delivery_guy.jpg"; // Adjust the path as needed
import DeliveryPersonImage1 from "../../assets/delivery_guy2.jpg"; // Adjust the path as needed
import DeliveryPersonImage2 from "../../assets/delivery_guy3.jpg"; // Adjust the path as needed

const CaseStudies = () => {
  // Utility function to generate random numbers within a range
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Array of available images
  const images = [DeliveryPersonImage, DeliveryPersonImage1, DeliveryPersonImage2];

  // Generate random data
  const data = Array(9)
    .fill(null)
    .map(() => ({
      title: `Darkstore ${getRandomNumber(1, 50)}`, // Random Darkstore number between 1 and 50
      subtitle: `Competition #${getRandomNumber(1, 100)} winners`, // Random Competition number between 1 and 100
      image: images[getRandomNumber(0, images.length - 1)], // Randomly select an image
    }));

  return (
    <div className="winner-case-studies-container">
      <h2>Winner Case Studies</h2>
      <div className="scrollable-container" style={{ marginBottom: "150px" }}>
        <div className="grid-container">
          {data.map((item, index) => (
            <div className="card-study" key={index}>
              <div className="image-container">
                <img
                  src={item.image} // Use the randomly assigned image
                  alt="Delivery person"
                  className="image"
                  style={{
                    height: "auto",
                  }}
                />
                <div className="play-button">▶</div>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
