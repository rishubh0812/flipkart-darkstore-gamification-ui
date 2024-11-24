import React, { useEffect, useState } from 'react';
import './CompetitionCard.css'; // Add the CSS file for styling
import Filters from '../../Utils/Filter/Filter';
import darkstoreService from '../../api/darkstore';
import WinnerImageIndia1 from "../../assets/winnerindia_1.png";
import WinnerImageIndia2 from "../../assets/winnerindia_2.png";
import WinnerImageIndia3 from "../../assets/winnerindia_3.png";
import WinnerImage1 from "../../assets/winner_1.png";
import WinnerImage2 from "../../assets/winner_2.png";
import WinnerImage3 from "../../assets/winner_3.png";

const CompetitionCard = ({area, CompetitionNumber, selectedOption, setSelectionOption, isTop, darkstores}) => {
    const [cities, setCities] = useState([]);
    const handleFilterChange = (type, value) => {
    setSelectionOption(value);
  };

  const getCities = async () => {
    try {
        const response = await darkstoreService.getCities();
        const finalList = ["INDIA",...response];
        setCities(finalList);
    }
    catch(e) {
        console.error(e);
    }
  };

  useEffect(() => {
    getCities();
  },[]);

  return (
    <div className="competition-card-container">
      <div className="competition-header">
      {!isTop ? <><h2>{`${area} winners`}</h2> <Filters
            options={cities}
            selectedOption={selectedOption}
            onFilterChange={handleFilterChange}
          /> </> : <><h2>{`${area} winners`}</h2>  <h3>{`COMPETITION #${CompetitionNumber}`}</h3> </>}
        {/* <h2>{`${area} winners`}</h2>
        
         {
            area !== 'INDIA' ? <Filters
            options={["INDIA", "Mumbai", "Bangalore", "Pune", "Hyderabad"]}
            selectedOption={selectedOption}
            onFilterChange={handleFilterChange}
          /> :  <h3>{`COMPETITION #${CompetitionNumber}`}</h3>
         }    */}
      </div>
      {/* <div className="grid-container">
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
        </div> */}
      {!(!isTop && area === 'INDIA') && <div className="cards-container">
        {darkstores.map((darkstore, index) => (
        <div className="card" key={index}>
            <div className key={index}>
            <div className="image-container">
                {index === 0 && <img className="card-emoji" style={{
                    height: "200px",
                    width: "100%",
                    borderRadius: "26px",
                  }}
                  src={
                    isTop ? WinnerImageIndia1: WinnerImage1
                  }
                  />}
                {index === 1 && <img className="card-emoji" style={{
                    height: "200px",
                    width: "92%",
                    borderRadius: "26px",
                  }}
                  src={
                    isTop ? WinnerImageIndia2 : WinnerImage2 
                  }
                  />}
                {index === 2 && <img className="card-emoji" style={{
                    height: "200px",
                    width: "92%",
                    borderRadius: "26px",
                  }}
                  src={
                    isTop ? WinnerImageIndia3 : WinnerImage3
                  }
                  />}
              </div>
            </div>

      

      <div className="card-body">
        <h4>{darkstore.name}</h4>
        {/* <p>{`City: ${darkstore.city}`}</p>
        <p>{`Score: ${darkstore.score}`}</p> */}
      </div>
    </div>
  ))}

      </div>}
    </div>
  );
};

export default CompetitionCard;
