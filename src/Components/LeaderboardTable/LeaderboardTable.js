import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import Filters from "../../Utils/Filter/Filter";
import GenericTable from "../GenericTable/GenericTable";
import { Typography } from "@mui/material";
import darkstoreService from "../../api/darkstore";

const data = [
  { nationalRank: 1, cityRank: 1, storeName: "Dark store 1", score: 230, city: "Bengaluru" },
  { nationalRank: 2, cityRank: 1, storeName: "Dark store 2", score: 220, city: "Mumbai" },
  { nationalRank: 3, cityRank: 2, storeName: "Dark store 3", score: 210, city: "Hyderabad" },
  { nationalRank: 4, cityRank: 3, storeName: "Dark store 4", score: 200, city: "Pune" },
  { nationalRank: 5, cityRank: 3, storeName: "Dark store 5", score: 200, city: "Hyderabad" },
  { nationalRank: 6, cityRank: 4, storeName: "Dark store 6", score: 200, city: "Pune" },
  { nationalRank: 7, cityRank: 2, storeName: "Dark store 7", score: 200, city: "Mumbai" },
];

const StyledTypography = styled(Typography)({
  fontSize: "22px",
  fontWeight: "600",
  color: "#333333",
  marginBottom: "30px",
  marginLeft: "5px",
});

const StyledMUITable = () => {
  const [selectedOption, setSelectionOption] = useState("INDIA");
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [overallData, setOverallData] = useState([]);
  const [data, setData] = useState([]);
  const [cities, setCities] = useState([]);

  const handleFilterChange = (type, value) => {
    setSelectionOption(value);
    value === "INDIA" ? setData(overallData) : setData(overallData.filter((item) => item.city === value));
  };

  // Dynamically adjust columns based on the selected option
  const columns = [
    ...(selectedOption !== "INDIA"
      ? [
          {
            field: "cityRank",
            headerName: "City Rank",
            render: (row) => (
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  lineHeight: "30px",
                  textAlign: "center",
                  borderRadius: "50%",
                  backgroundColor: row.cityRank <= 3 ? "#88c4ff" : "#f0f0f0",
                  color: row.cityRank <= 3 ? "#ffffff" : "#555555",
                  fontWeight: "600",
                  fontSize: "14px",
                  margin: "auto",
                }}
              >
                {row.cityRank}
              </div>
            ),
          },
        ]
      : []),
    {
      field: "nationalRank",
      headerName: "National Rank",
      render: (row) => (
        <div
          style={selectedOption === "INDIA"
            ? {
            width: "30px",
            height: "30px",
            lineHeight: "30px",
            textAlign: "center",
            borderRadius: "50%",
            backgroundColor:  row.nationalRank <= 3 ? "#88c4ff" : "#f0f0f0",
            color: row.nationalRank <= 3 ? "#ffffff" : "#555555",
            fontWeight: "600",
            fontSize: "14px",
            margin: "auto",
          } : {}}
        >
          {row.nationalRank}
        </div>
      ),
    },
    { field: "storeName", headerName: "Store Name" },
    { field: "score", headerName: "Score" },
    ...(selectedOption === "INDIA"
      ? [{ field: "city", headerName: "City" }] : []),
  ];

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

  const getDarkstoreData = async () => {
    try{
      const response = await darkstoreService.getDarkstoreData();
      setLeaderboardData(response);
    }
    catch(e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getDarkstoreData();
    getCities();
  },[]);

  useEffect(() => {
    const transformedData = transformData(leaderboardData);
    setOverallData(transformedData);
    setData(transformedData);
  },[leaderboardData])

  const transformData = (data) => {
    // Sort by score (if not already sorted)
    const sortedData = [...data].sort((a, b) => b.score - a.score);
  
    // Map for city-specific ranking
    const cityRanks = {};
  
    return sortedData.map((item, index) => {
      const city = item.darkstore.city.city;
      const storeName = item.darkstore.darkstoreName;
  
      // Determine national rank
      const nationalRank = index + 1;
  
      // Determine city rank
      if (!cityRanks[city]) {
        cityRanks[city] = 1; // Initialize city rank
      } else {
        cityRanks[city]++;
      }
      const cityRank = cityRanks[city];
  
      return {
        nationalRank,
        cityRank,
        storeName,
        score: Math.round(item.score), // Optional: round score for cleaner output
        city,
      };
    });
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          background: "white",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <StyledTypography variant="h5" component="h1">
            Leaderboard
          </StyledTypography>
          <Filters
            options={cities}
            selectedOption={selectedOption}
            onFilterChange={handleFilterChange}
          />
        </div>
        <GenericTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default StyledMUITable;
