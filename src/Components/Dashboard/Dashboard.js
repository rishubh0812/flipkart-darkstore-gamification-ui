import React, { useEffect, useState } from 'react';
import Filters from '../../Utils/Filter/Filter';
import MetricCards from '../../Utils/MetricCards/MetricCarss';
import LeaderboardTable from '../LeaderboardTable/LeaderboardTable';
import TopPerformersChart from '../TopPerformersChart/TopPerformersChart';
import './Dashboard.css';
import StoreWarsBanner from '../StoreWarsBanner/StoreWarsBanner';
import darkstoreService from '../../api/darkstore';
import { useDispatch } from 'react-redux';
import { setCompetition } from '../../store/actions/competitionActions';

const Dashboard = ({darkstoreData}) => {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [competitionNumber, setCompetitionNumber] = useState(1);
  const [competitionDate, setCompetitionDate] = useState('');

const handleFilterChange = (type, value) => {
    if (type === 'country') {
        resetSelected("state");
        resetSelected("city");
        setSelectedCountry(value);
    }
    if (type === 'state') {
        resetSelected("city");
    }
    if (type === 'city') {
        setSelectedCity(value);
    }
  };

  const resetSelected = (type) => {
    if (type === 'country'){
        setSelectedCountry('');
    }
    if (type === 'city') setSelectedCity('');
  };

  const filteredData = darkstoreData.filter(
    (store) =>
      (!selectedCountry || store.country === selectedCountry) &&
      (!selectedCity || store.city === selectedCity)
  );

  const getCompetitionDetails = async() => {
    var months = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUNE", 
        "JULY", "AUG", "SEP", "OCT", "NOV", "DEC" ];
    const response = await darkstoreService.getCompetitionData();
    setCompetitionNumber(response.competitionNo);
    dispatch(setCompetition({competitionNumber: response.competitionNo,
        competitionDate: response.startDate}));
    const competitionDateArray = response.startDate.split('-');
    const year = competitionDateArray[0];
    const month = months[parseInt(competitionDateArray[1])-1];
    const weekStart = competitionDateArray[2];
    const weekEnd = parseInt(weekStart) + 6;
    const dateString = `${month} ${weekStart} - ${month} ${weekEnd}, ${year}`;
    setCompetitionDate(dateString);
  };

  useEffect(() => {
    getCompetitionDetails();
  },[]);

  return (
    <div className="dashboard-container">
      {/* Filters Section */}
      {/* <Filters
        countries={['India', 'USA', 'Canada', 'UK', 'Australia']}
        cities={['Mumbai', 'San Francisco', 'Toronto', 'London', 'Sydney']}
        selectedCountry={selectedCountry}
        selectedCity={selectedCity}
        onFilterChange={handleFilterChange}
      /> */}

      {/* Main Content Section */}
      <div className="dashboard-content">
        {/* Left Column: Metrics and Leaderboard */}
        <div className="left-column">
          {/* <MetricCards
            metrics={[
              { name: 'Avg Time to Deliver', value: '15 mins' },
              { name: 'Efficiency', value: '85%' },
              { name: 'Total Orders', value: '1200' },
            ]}
          /> */}
          <StoreWarsBanner title={"STORE WARS COMPETITION"} number={`#${competitionNumber}`} date={competitionDate}/>
          <LeaderboardTable data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
