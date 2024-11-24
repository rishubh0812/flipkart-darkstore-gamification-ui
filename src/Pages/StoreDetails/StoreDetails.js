import React, { useEffect, useState } from "react";
import DetailedStorePerformanceTable from "../../Components/DetailedStorePerformanceTable/DetailedStorePerformanceTable";
import { styled } from "@mui/material";
import { Typography } from "@mui/material";
import Filters from "../../Utils/Filter/Filter";
import LineChart from "../Charts/ChartLine";
import darkstoreService from "../../api/darkstore";
import { useSelector } from "react-redux";

const StyledTypography = styled(Typography)({
    fontSize: "22px",
    fontWeight: "600",
    color: "#333333",
    marginBottom: "5px",
    marginLeft: "5px",
});

const StoreDetails = () => {
    const darkstoreId = useSelector((state) => state.user.darkstoreId);
    const [selectedOption, setSelectionOption] = useState("");
    const [responseData, setResponseData] = useState([]);
    const [data, setData] = useState([]);
    const [dataTable, setDataTable] = useState([]);

    const handleFilterChange = (type, value) => {
        setSelectionOption(value);
        // Add logic to filter data based on the selected option
    };

    const getEmployeeDetails = async () => {
        const response = await darkstoreService.getEmployeeDetails(darkstoreId)
        setResponseData(response);
    }

    useEffect(() => {
       getEmployeeDetails(); 
    },[]);

    const transformData = (backendData) => {
        const groupedData = backendData.reduce((acc, item) => {
          const week = `Week ${item.weekNumber}`;
          if (!acc[week]) {
            acc[week] = [];
          }
          acc[week].push({
            id: item.pickerId,
            time: Math.round(item.avgP2dMinutes * 100) / 100,
          });
          return acc;
        }, {});
      
        const groupedArray = Object.entries(groupedData).map(([week, employees]) => ({
          week,
          employees,
        }));
      
        return groupedArray.sort((a, b) => {
          const weekNumberA = parseInt(a.week.split(' ')[1], 10); 
          const weekNumberB = parseInt(b.week.split(' ')[1], 10);
          return weekNumberA - weekNumberB;
        });
      };
    
      const transformWeekData = (weekData) => {
        return weekData.employees.map((employee) => ({
          employeeId: employee.id,
          type: "Picker",
          pickingTime: `${employee.time} mins`,
        }));
      };

    useEffect(() => {
        const transformedData = transformData(responseData);
        const dataTable = transformedData.length && transformWeekData(transformedData[transformedData.length -1]) || [];
        setDataTable(dataTable);
        setData(transformedData);

    },[responseData]);

    return (
        <div
            style={{
                height: "100vh",
                overflowY: "auto",
                background: "#f9f9f9",
                padding: "5px",
            }}
        >
            <div
                style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    background: "white",
                    margin: "20px",
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >


                    <Filters
                        options={["Weekly", "Daily"]}
                        selectedOption={selectedOption}
                        onFilterChange={handleFilterChange}
                    />
                </div>
                <h3>PickList_To_Dispack vs Week</h3>
                <LineChart data={data}/>
                <StyledTypography variant="h5" component="h1">
                    Detailed store performance
                </StyledTypography>
                <DetailedStorePerformanceTable data={dataTable}/>
            </div>
        </div>
    );
};

export default StoreDetails;