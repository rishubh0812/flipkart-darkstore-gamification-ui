import React, { useEffect, useState } from "react";
import CompetitionCard from "../../Components/CompetitionCard/CompetitionCard";
import WinnerTable from "../../Components/WinnersTable/WinnersTable";
import darkstoreService from "../../api/darkstore";

const WinnersPage = () => {
  const [selectedOption, setSelectionOption] = useState("INDIA");
  const [competitionNumber, setCompetitionNumber] = useState(1);
  const [darkstores, setDarkstores] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [data, setData] = useState([]);

  const [darkstoresCity, setDarkstoresCity] = useState([]);
  const [responseDataCity, setResponseDataCity] = useState([]);

  const getWinnersData = async () => {
    try {
        const response = await darkstoreService.getWinnersData();
        setResponseData(response);
    }
    catch(e) {
        console.error(e);
    }
  }

  const transformData = (data) => {
    return Object.entries(data).map(([competitionNo, stores]) => ({
      competition: parseInt(competitionNo, 10),
      stores: stores.map((store) => ({
        name: store.darkstore.darkstoreName,
        city: store.darkstore.city.city,
        score: store.score,
        id: store.darkstoreId,
      })),
    }));
  };

  useEffect(() => {
    getWinnersData();
  },[]);

  useEffect(() => {
    const transformedData = transformData(responseData);
    const reversedTransformedData = transformedData.reverse();
    setDarkstores(reversedTransformedData.length && reversedTransformedData[0].stores || []);
    setDarkstoresCity(reversedTransformedData.length && reversedTransformedData[0].stores || []);
    setCompetitionNumber(reversedTransformedData.length ? reversedTransformedData[0].competition : 1)
    setData(reversedTransformedData);
  },[responseData]);

  useEffect(() => {
    const transformedDataCity = transformData(responseDataCity);
    const reversedTransformedData = transformedDataCity.reverse();
    setDarkstoresCity(reversedTransformedData.length && reversedTransformedData[0].stores || []);
    setCompetitionNumber(reversedTransformedData.length ? reversedTransformedData[0].competition : 1)
    setData(reversedTransformedData);
  },[responseDataCity]);

  const getWinnersDataCity = async (selectedOption) => {
    try {
        const responseCity = await darkstoreService.getWinnersDataCity(selectedOption);
        setResponseDataCity(responseCity);
    }
    catch(e) {
        console.error(e);
    }
  };

  useEffect(() => {
    if(selectedOption !== "INDIA")
    {
        getWinnersDataCity(selectedOption);
    }
    else
    {
        getWinnersData();
    }
  },[selectedOption]);

  return (
    <div style={styles.scrollableContainer}>
      <div style={{
        background: "white",
        border: "1px solid rgb(221, 221, 221)",
        borderRadius: "15px",
        width: "90%",
        margin: "0px auto",
        marginBottom: "10px",
      }}>
      <CompetitionCard
        area={"INDIA"}
        CompetitionNumber={competitionNumber}
        selectedOption={selectedOption}
        setSelectionOption={setSelectionOption}
        isTop={true}
        darkstores={darkstores}
      />
      </div>
      <div style={{
        background: "white",
        border: "1px solid rgb(221, 221, 221)",
        borderRadius: "15px",
        width: "90%",
        height: "90vh",
        margin: "0px auto",
      }}>
      <CompetitionCard 
        area={selectedOption}
        CompetitionNumber={competitionNumber}
        selectedOption={selectedOption}
        setSelectionOption={setSelectionOption}
        isTop={false}
        darkstores={darkstoresCity}
      />
      <WinnerTable data={data}/>
      </div>
    </div>
  );
};

const styles = {
  scrollableContainer: {
    maxHeight: "100vh",
    overflowY: "auto",    
    boxSizing: "border-box",
    marginTop: "-8px",
  },
};

export default WinnersPage;