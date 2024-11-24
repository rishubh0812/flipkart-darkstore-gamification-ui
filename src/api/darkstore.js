import darkstoreServiceInstance from "./Services/darkstore";
import { ENDPOINTS } from "../Config/apiEndpoints";
import { darkstoreData, winnersData } from "../Utils/sampleData";

const darkstoreService = {
  getDarkstoreData: async () => {
    try {
      const response = { data: darkstoreData };
      return response.data;
    } catch (error) {
      console.error("Error fetching darkstore data:", error);
      throw error;
    }
  },
    getLoginInfo: async (userName, password) => {
      try {
        const response = await darkstoreServiceInstance.post(`${ENDPOINTS.login}/${userName}/${password}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
  
    getEmployeeDetails: async (darkstore) => {
      try{
        const response = await darkstoreServiceInstance.get(`${ENDPOINTS.getEmployeeDetails}/${darkstore}`)
        return response.data;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
    getCities: async () => {
        try {
          const response = await darkstoreServiceInstance.get(ENDPOINTS.getAllCities);
          return response.data;
        } catch (error) {
          console.error("Error fetching user data:", error);
          throw error;
        }
      },
      getCompetitionData: async () => {
        try {
          const response = await darkstoreServiceInstance.get(ENDPOINTS.getCompetitionData);
          return response.data;
        } catch (error) {
          console.error("Error fetching user data:", error);
          throw error;
        }
      },
      getWinnersData: async () => {
        try {
          const response =  await darkstoreServiceInstance.get(ENDPOINTS.getWinnerData);
          return response.data;
        } catch (error) {
          console.error("Error fetching user data:", error);
          throw error;
        }
      },
      getWinnersDataCity: async (selectedOption) => {
        try {
          const response = await darkstoreServiceInstance.get(`${ENDPOINTS.getWinnerData}/${selectedOption}`)
          return response.data;
        } catch (error) {
          console.error("Error fetching user data:", error);
          throw error;
        }
      },
};

export default darkstoreService;